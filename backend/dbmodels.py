from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from .db import Base

class User(Base):
    __tablename__ = 'users'  # Name of the table in the database
    id = Column(Integer, primary_key=True, index=True)  # Primary key column
    email = Column(String, unique=True, index=True)  # Unique email column
    hashed_password = Column(String)  # Password column
    is_active = Column(Boolean, default=True)  # Active status column

    items = relationship("Item", back_populates="owner")  # Relationship to the Item table
    genai_models = relationship("GenAIModel", back_populates="owner")  # Relationship to the GenAIModel table

class Item(Base):
    __tablename__ = 'items'  # Name of the table in the database
    id = Column(Integer, primary_key=True, index=True)  # Primary key column
    title = Column(String, index=True)  # Title column
    description = Column(String, index=True)  # Description column
    owner_id = Column(Integer, ForeignKey('users.id'))  # Foreign key to the User table

    owner = relationship("User", back_populates="items")  # Relationship to the User table

class GenAIModel(Base):
    __tablename__ = 'genai_models'  # Name of the table in the database
    id = Column(Integer, primary_key=True, index=True)  # Primary key column
    name = Column(String, index=True)  # Name of the GenAI model
    description = Column(String, index=True)  # Description of the GenAI model
    model_type = Column(String, index=True)  # Type of the GenAI model (e.g., GPT-3, BERT)
    owner_id = Column(Integer, ForeignKey('users.id'))  # Foreign key to the User table

    owner = relationship("User", back_populates="genai_models")  # Relationship to the User table