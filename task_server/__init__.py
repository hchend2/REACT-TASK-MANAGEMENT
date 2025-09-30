# 
# REACT-TASK-MANAGEMENT/task_server/__init__.py
# 
from flask import Flask
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from .config import Config
from task_db.models import create_users_table

bcrypt = Bcrypt()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Enable CORS
    CORS(app)

    # Init extensions
    bcrypt.init_app(app)
    jwt.init_app(app)

    # Create DB tables
    create_users_table()

    # Import and register routes
    from .routes import auth_bp
    app.register_blueprint(auth_bp, url_prefix="/auth")

    return app

