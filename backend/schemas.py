from pydantic import BaseModel

class UserBase(BaseModel):
    email: str
    is_active: bool

class UserCreate(UserBase):
    hashed_password: str

class User(UserBase):
    id: int

    class Config:
        orm_mode = True

class ItemBase(BaseModel):
    title: str
    description: str

class ItemCreate(ItemBase):
    pass

class Item(ItemBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True

class GenAIModelBase(BaseModel):
    name: str
    description: str
    model_type: str

class GenAIModelCreate(GenAIModelBase):
    pass

class GenAIModel(GenAIModelBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True

class UserProfileUpdate(BaseModel):
    email: str
    is_active: bool
    hashed_password: str