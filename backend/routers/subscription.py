from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..db import get_db
from ..models import User
from ..config import Settings
import stripe

router = APIRouter()
settings = Settings()

stripe.api_key = settings.STRIPE_SECRET_KEY

@router.post("/create-subscription-session")
async def create_subscription_session(db: Session = Depends(get_db)):
    try:
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price': 'price_1234567890',  # Replace with your actual price ID
                'quantity': 1,
            }],
            mode='subscription',
            success_url='https://your-domain.com/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url='https://your-domain.com/canceled',
        )
        return {"clientSecret": session.client_secret}
    except stripe.error.StripeError as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/check-subscription")
async def check_subscription(db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    # Implement actual subscription checking logic
    subscription = db.query(Subscription).filter(Subscription.user_id == user.id).first()
    if subscription:
        return {"isPaid": True, "tokensRemaining": subscription.tokens_remaining}
    return {"isPaid": False, "tokensRemaining": 0}