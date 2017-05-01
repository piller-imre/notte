from flask import send_file

from app import app
from views import NoteView
from views import TagView


@app.route('/')
def index():
    return send_file('templates/index.html')


# TODO: Register the API according to http://flask.pocoo.org/docs/0.12/views/ !
app.add_url_rule('/notes', view_func=NoteView.as_view('notes'), methods=['GET', 'POST'])
app.add_url_rule('/notes/<int:note_id>', view_func=NoteView.as_view('note'), methods=['GET', 'PUT', 'DELETE'])


app.add_url_rule('/tags', view_func=TagView.as_view('tags'), methods=['GET'])


if __name__ == '__main__':
    app.run(debug=True)
