import logging
from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2AuthorizationCodeBearer, OAuth2PasswordBearer
from .routers import items, agents, tools, dojo, projects, userprofile, aimodels
from .config import Settings
from .db import get_db
from sqlalchemy.orm import Session
from . import models, crud, schemas, oauth, auth
from .database import engine, SessionLocal
from fastapi.responses import RedirectResponse, JSONResponse
import jwt

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

settings = Settings()

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(userprofile.router)
app.include_router(items.router)
app.include_router(agents.router)
app.include_router(tools.router)
app.include_router(dojo.router)
app.include_router(projects.router)
app.include_router(aimodels.router)

oauth2_scheme = OAuth2AuthorizationCodeBearer(
    authorizationUrl="/auth/login",
    tokenUrl="/auth/token",
)

@app.get("/auth/google")
async def google_auth():
    return await oauth.google_auth()

@app.get("/auth/google/callback")
async def google_auth_callback(code: str, db: Session = Depends(get_db)):
    user_data = await oauth.google_auth_callback(code)
    user = crud.get_user_by_email(db, email=user_data['email'])
    if not user:
        user = crud.create_user(db, schemas.UserCreate(
            email=user_data['email'],
            name=user_data['name'],
            oauth_provider='google'
        ))
    token = create_access_token(data={"sub": user.email})
    return {"access_token": token, "token_type": "bearer"}

@app.get("/auth/github")
async def github_auth():
    return await oauth.github_auth()

@app.get("/auth/github/callback")
async def github_auth_callback(code: str, db: Session = Depends(get_db)):
    user_data = await oauth.github_auth_callback(code)
    user = crud.get_user_by_email(db, email=user_data['email'])
    if not user:
        user = crud.create_user(db, schemas.UserCreate(
            email=user_data['email'],
            name=user_data['name'],
            oauth_provider='github'
        ))
    token = create_access_token(data={"sub": user.email})
    return {"access_token": token, "token_type": "bearer"}

@app.get("/api/health")
async def health_check(db: Session = Depends(get_db)):
    try:
        db.execute("SELECT 1")
        return {"status": "healthy"}
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        raise HTTPException(status_code=500, detail="Health check failed")

@app.get("/auth/login")
async def login(provider: str):
    if provider in ["google", "github"]:
        # Implement actual OAuth logic here
        return JSONResponse({"status": "redirecting", "provider": provider})
    else:
        return JSONResponse({"error": "Invalid provider"}, status_code=400)

@app.get("/auth/status")
async def auth_status():
    # Implement actual auth check here
    return JSONResponse({"authenticated": False})

@app.post("/api/auth/google/callback")
async def google_auth_callback(code: str, code_verifier: str = None):
    # Implement Google OAuth token exchange and user creation/login
    # Return user data and/or access token
    pass

@app.post("/api/auth/github/callback")
async def github_auth_callback(code: str, code_verifier: str = None):
    # Implement GitHub OAuth token exchange and user creation/login
    # Return user data and/or access token
    pass

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@app.get("/api/user")
async def get_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    try:
        payload = jwt.decode(token, settings.JWT_SECRET, algorithms=[settings.JWT_ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise HTTPException(status_code=401, detail="Invalid authentication credentials")
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Authentication expired")
    except jwt.JWTClaimsError:
        raise HTTPException(status_code=401, detail="Invalid claims")
    except jwt.JWTError:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")
    
    user = crud.get_user_by_email(db, email=email)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    return {
        "email": user.email,
        "name": user.name,
        "oauth_provider": user.oauth_provider
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)