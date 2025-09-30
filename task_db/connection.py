# 
# REACT-TASK-MANAGEMENT/task_db/connnection.py
#
import psycopg2
import os
from dotenv import load_dotenv

# Load environment variables from a .env file if it exists
load_dotenv()

def get_db_connection():
    return psycopg2.connect(
        host=os.getenv("DB_HOST"),
        database=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD")
    )