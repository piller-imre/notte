from flask import send_file

from app import app


@app.route('/')
def index():
    return send_file('templates/index.html')


if __name__ == '__main__':
    app.run(debug=True)
