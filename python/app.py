from flask import Flask

app = Flask(__name__)

@app.get("/")
def home():
    return """<!doctype html>
    <html><head><title>Python Sample</title></head>
    <body><h1>Hello from Python!</h1>
    <p>Served by Flask in a Docker container.</p></body></html>"""

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
