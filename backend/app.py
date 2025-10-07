from flask import Flask, jsonify, request
from neo4j_connect import Neo4jConnection
from neo4j_queries import Neo4jQueries
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

import os
NEO4J_URI = os.getenv('NEO4J_URI', 'neo4j://neo4j:7687')
NEO4J_USER = os.getenv('NEO4J_USER', 'neo4j')
NEO4J_PASSWORD = os.getenv('NEO4J_PASSWORD', 'password')
neo4j_conn = Neo4jConnection(NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD)
neo4j_conn.connect()

if neo4j_conn.is_connected():
    print("Successfully connected to Neo4j!")
else:
    print("Failed to connect to Neo4j.")


# APIs
@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()

    if "email" not in data or "password" not in data:
        return jsonify({"error": "Email and password are required"}), 400

    email = data["email"]
    password = data["password"]

    user = neo4j_conn.execute_query(
        Neo4jQueries.get_user_by_email_and_password(), {"email": email, "password": password}
    )

    if not user:
        return jsonify({"error": "Invalid email or password"}), 401

    print("User Data:", user[0])
    return jsonify(user[0])

@app.route('/api/home/<int:user_id>')
def home(user_id):
    return jsonify({"message": f"Welcome to the home page, user {user_id}!"})

@app.route('/api/random-background', methods=['GET'])
def random_background():
    background_image = neo4j_conn.execute_query(Neo4jQueries.get_random_background_image())

    if not background_image:
        return jsonify({"error": "No background image found"}), 404

    return jsonify(background_image[0])

@app.route('/api/categories', methods=['GET'])
def categories():
    categories = neo4j_conn.execute_query(Neo4jQueries.get_categories())

    if not categories:
        return jsonify({"error": "No categories found"}), 404

    return jsonify(categories)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5666)