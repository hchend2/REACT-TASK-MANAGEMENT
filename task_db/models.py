# 
# REACT-TASK-MANAGEMENT/task_db/models.py
#
from .connection import get_db_connection  

# def create_users_table():

#     connection = get_db_connection()
#     cursor = connection.cursor()

#     cursor.execute("""
#                     CREATE TABLE IF NOT EXISTS users (
#                         id SERIAL PRIMARY KEY,
#                         firstname VARCHAR(50) NOT NULL,
#                         lastname VARCHAR(50) NOT NULL,
#                         email VARCHAR(120) UNIQUE NOT NULL,
#                         password_hash VARCHAR(128) NOT NULL
#                     );
#                     """)
    
#     connection.commit()
#     cursor.close()
#     connection.close()

def create_users_table():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            firstname VARCHAR(50) NOT NULL,
            lastname VARCHAR(50) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(200) NOT NULL
        )
    """)
    conn.commit()
    cur.close()
    conn.close()

