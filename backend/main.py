import logging
from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from .routers import items, agents, tools, dojo, projects, userprofile, aimodels
from .config import Settings
from .db import get_db
from sqlalchemy.orm import Session
from . import models
from .database import engine
from .oauth import router as oauth_router

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
app.include_router(oauth_router, prefix="/oauth", tags=["oauth"])

@app.get("/api/health")
async def health_check(db: Session = Depends(get_db)):
    try:
        db.execute("SELECT 1")
        return {"status": "healthy"}
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        raise HTTPException(status_code=500, detail="Health check failed")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)