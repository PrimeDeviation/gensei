from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..db import get_db
from ..dbmodels import GenAIModel as GenAIModelModel
from ..schemas import GenAIModel, GenAIModelCreate

router = APIRouter()

@router.post("/aimodels/", response_model=GenAIModel)
def create_ai_model(ai_model: GenAIModelCreate, db: Session = Depends(get_db)):
    db_ai_model = GenAIModelModel(**ai_model.dict())
    db.add(db_ai_model)
    db.commit()
    db.refresh(db_ai_model)
    return db_ai_model

@router.get("/aimodels/{ai_model_id}", response_model=GenAIModel)
def read_ai_model(ai_model_id: int, db: Session = Depends(get_db)):
    ai_model = db.query(GenAIModelModel).filter(GenAIModelModel.id == ai_model_id).first()
    if ai_model is None:
        raise HTTPException(status_code=404, detail="AI model not found")
    return ai_model