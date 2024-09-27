import os
from sqlalchemy import create_engine, exc
from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy_utils import database_exists, create_database
from psycopg2 import connect
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT

# Assuming DATABASE_URL is in the format: postgresql://username:password@host:port/dbname
DATABASE_URL = os.getenv("DATABASE_URL")
db_parts = DATABASE_URL.split("/")
db_name = "genseilocaldb"
db_user = "primed"

# Reconstruct the URL with the correct database name
DATABASE_URL = "/".join(db_parts[:-1] + [db_name])

def init_db():
    global engine, SessionLocal, Base

    try:
        # Check if the database exists
        if not database_exists(DATABASE_URL):
            # Connect to PostgreSQL server
            postgres_url = "/".join(db_parts[:-1] + ["postgres"])
            conn = connect(postgres_url)
            conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
            cursor = conn.cursor()
            
            # Create the database
            cursor.execute(f"CREATE DATABASE {db_name} OWNER {db_user}")
            
            cursor.close()
            conn.close()
            
            print(f"Database '{db_name}' created successfully.")
        
        # Create the main engine
        engine = create_engine(DATABASE_URL)
        SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
        Base = declarative_base()
        
        print("Database connection established successfully.")
    except exc.SQLAlchemyError as e:
        print(f"An error occurred while setting up the database: {e}")
        raise

init_db()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()