from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..db import get_db

router = APIRouter()

@router.get("/pipelines/")
def read_dojo(db: Session = Depends(get_db)):
    # Implement your logic to read dojo
    return {"message": "Dojo information"}