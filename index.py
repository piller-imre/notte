from flask import send_file

from app import app
from views import NoteView
from views import TagView


@app.route('/')
def index():
    return send_file('templates/index.html')


app.add_url_rule('/notes/', view_func=NoteView.as_view('notes'))
app.add_url_rule('/tags/', view_func=TagView.as_view('tags'))


if __name__ == '__main__':
    app.run(debug=True)
