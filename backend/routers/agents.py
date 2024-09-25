from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..db import get_db

router = APIRouter()

@router.get("/agents/")
def read_agents(db: Session = Depends(get_db)):
    # Implement your logic to read agents
    return {"message": "List of agents"}