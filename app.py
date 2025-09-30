
#
# REACT-TASK-MANAGEMENT/task_server/app.py
#
import sys
import os
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
from task_db.models import create_users_table
from task_server.routes import auth_bp

# Ensure project root is in Python path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Enable CORS (allow frontend on localhost:3000)
CORS(app, origins=["http://localhost:3000"], supports_credentials=True)

# JWT config from env
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY", "fallback-secret")
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = int(os.getenv("JWT_ACCESS_TOKEN_EXPIRES", 3600))

jwt = JWTManager(app)

# Register routes
app.register_blueprint(auth_bp, url_prefix='/auth')
# app.register_blueprint(task_bp, url_prefix='/api/tasks')

if __name__ == '__main__':
    try:
        create_users_table()
        print("✅ Users table ensured")
    except Exception as e:
        print("❌ Failed to create users table:", e)

    app.run(debug=True, host="127.0.0.1", port=5000)
