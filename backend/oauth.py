from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2AuthorizationCodeBearer
from sqlalchemy.orm import Session
from authlib.integrations.starlette_client import OAuth
from starlette.config import Config
from starlette.requests import Request
from . import models, database
from .config import settings  # Import your existing config setup

router = APIRouter()

oauth = OAuth()

oauth.register(
    name='google',
    client_id=settings.GOOGLE_CLIENT_ID,
    client_secret=settings.GOOGLE_CLIENT_SECRET,
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'}
)

oauth.register(
    name='github',
    client_id=settings.GITHUB_CLIENT_ID,
    client_secret=settings.GITHUB_CLIENT_SECRET,
    access_token_url='https://github.com/login/oauth/access_token',
    access_token_params=None,
    authorize_url='https://github.com/login/oauth/authorize',
    authorize_params=None,
    api_base_url='https://api.github.com/',
    client_kwargs={'scope': 'user:email'},
)

@router.get('/login/{provider}')
async def login(provider: str, request: Request):
    redirect_uri = request.url_for(f'auth_{provider}')
    return await oauth.create_client(provider).authorize_redirect(request, redirect_uri)

@router.get('/auth/{provider}')
async def auth(provider: str, request: Request, db: Session = Depends(database.get_db)):
    token = await oauth.create_client(provider).authorize_access_token(request)
    user_data = await get_user_data(provider, token)
    
    # Check if user exists, if not create a new user
    user = db.query(models.User).filter(models.User.email == user_data['email']).first()
    if not user:
        user = models.User(
            email=user_data['email'],
            name=user_data['name'],
            oauth_provider=provider,
            oauth_id=user_data['id']
        )
        db.add(user)
        db.commit()
        db.refresh(user)
    
    # Here you would typically create a JWT token and return it
    # For simplicity, we're just returning the user data
    return user_data

async def get_user_data(provider: str, token):
    if provider == 'google':
        resp = await oauth.google.get('https://www.googleapis.com/oauth2/v3/userinfo', token=token)
        profile = resp.json()
        return {
            'id': profile['sub'],
            'name': profile['name'],
            'email': profile['email']
        }
    elif provider == 'github':
        resp = await oauth.github.get('user', token=token)
        profile = resp.json()
        emails = await oauth.github.get('user/emails', token=token)
        email = next(email for email in emails.json() if email['primary'])['email']
        return {
            'id': str(profile['id']),
            'name': profile['name'],
            'email': email
        }
    else:
        raise HTTPException(status_code=400, detail="Unsupported OAuth provider")

@router.post('/disconnect/{provider}')
async def disconnect(provider: str, user_id: int, db: Session = Depends(database.get_db)):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    if user.oauth_provider == provider:
        user.oauth_provider = None
        user.oauth_id = None
        db.commit()
        return {"message": f"Disconnected from {provider}"}
    else:
        raise HTTPException(status_code=400, detail=f"User is not connected to {provider}")