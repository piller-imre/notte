from app import app


@app.route('/')
def index():
    return 'Notte'


if __name__ == '__main__':
    app.run(debug=True)
