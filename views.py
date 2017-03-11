import json
from flask.views import MethodView


class NoteView(MethodView):

    def get(self, note_id):
        if note_id is None:
            return 'List of the notes'
        else:
            note = {
                'id': note_id,
                'description': 'sample note'
            }
            return json.dumps(note)


class TagView(MethodView):

    def get(self):
        return 'List of the tags'
