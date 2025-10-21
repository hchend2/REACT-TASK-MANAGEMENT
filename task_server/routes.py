# 
# Authentication Routes for User Registration and Login
# REACT_TODO/todo_server/routes.py
#
from flask import Blueprint, request, jsonify
from flask_bcrypt import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from task_db.models import get_db_connection

auth_bp = Blueprint("auth", __name__)

# -------- REGISTER --------
@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    # Handle missing or invalid JSON
    if data is None:
        return jsonify({"message": "Invalid JSON or missing Content-Type header"}), 415

    firstname = data.get("firstname")
    lastname = data.get("lastname")
    email = data.get("email")
    password = data.get("password")

    if not firstname or not lastname or not email or not password:
        return jsonify({"message": "All fields are required"}), 400

    conn = get_db_connection()
    cur = conn.cursor()

    # Check if user already exists
    cur.execute("SELECT id FROM users WHERE email = %s", (email,))
    existing_user = cur.fetchone()

    if existing_user:
        cur.close()
        conn.close()
        return jsonify({"message": "User already exists"}), 409

    # Hash password
    hashed_pw = generate_password_hash(password).decode("utf-8")

    # Insert user into DB
    cur.execute(
        "INSERT INTO users (firstname, lastname, email, password) VALUES (%s, %s, %s, %s) RETURNING id",
        (firstname, lastname, email, hashed_pw),
    )
    user_id = cur.fetchone()[0]
    conn.commit()

    cur.close()
    conn.close()

    return jsonify({"message": "User registered successfully", "user_id": user_id}), 201


# -------- LOGIN --------
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("SELECT id, password FROM users WHERE email = %s", (email,))
    user = cur.fetchone()

    cur.close()
    conn.close()

    if not user:
        return jsonify({"message": "Invalid credentials"}), 401

    user_id, hashed_pw = user

    if not check_password_hash(hashed_pw, password):
        return jsonify({"message": "Invalid credentials"}), 401

    # Create JWT token
    access_token = create_access_token(identity=user_id)

    return jsonify({"message": "Login successful", "access_token": access_token}), 200
