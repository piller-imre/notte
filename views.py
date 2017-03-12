import json
from flask import request
from flask.views import MethodView


class NoteView(MethodView):

    def get(self, note_id):
        if note_id is None:
            return 'List of the notes'
        else:
            note = {
                'id': note_id,
                'description': 'sample note',
                'tags': 'tags for testing'
            }
            return json.dumps(note)

    def post(self):
        print(request.form)
        result = {
            'id': 1234
        }
        return json.dumps(result)


class TagView(MethodView):

    def get(self):
        return 'List of the tags'
