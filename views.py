import json
from flask import request
from flask.views import MethodView

from models import db
from models import Note


class NoteView(MethodView):

    def get(self, note_id=None):
        if note_id is None:
            note_results = Note.query.all()
            notes = [note.to_dict() for note in note_results]
            return json.dumps(notes)
        else:
            note = Note.query.filter(Note.id == note_id).one()
            return note.to_json()

    def post(self):
        note = Note(location='test', **request.json)
        db.session.add(note)
        db.session.commit()
        result = {
            'id': note.id
        }
        return json.dumps(result)

    def put(self, note_id):
        note = Note.query.filter(Note.id == note_id).one()
        note.description = request.json['description']
        note.tags = request.json['tags']
        db.session.add(note)
        db.session.commit()
        result = {
            'id': note.id
        }
        return json.dumps(result)

    def delete(self, note_id):
        note = Note.query.filter(Note.id == note_id).one()
        db.session.delete(note)
        db.session.commit()
        result = {
            'id': note_id
        }
        return json.dumps(result)


class TagView(MethodView):

    def get(self, tag_id=None):
        if tag_id is None:
            tags = [
                {'name': 'first'},
                {'name': 'second'},
                {'name': 'third'}
            ]
            return json.dumps(tags)
        else:
            pass
