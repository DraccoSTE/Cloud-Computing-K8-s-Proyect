# neo4j_queries.py

class Neo4jQueries:
    @staticmethod
    def get_user_by_email_and_password():
        return (
            "MATCH (u:User {email: $email, password: $password}) "
            "RETURN u.email AS email, u.password AS password, id(u) AS id"
        )

    @staticmethod
    def get_random_background_image():
        return (
            "MATCH (b:BackgroundImage) "
            "WITH b ORDER BY rand() LIMIT 1 "
            "RETURN b.url AS url, b.description AS description, b.tag AS tag"
        )

    @staticmethod
    def get_categories():
        return (
            "MATCH (c:Category) "
            "RETURN c.Name AS name, c.Tag AS tag"
            "LIMIT 8"
        )