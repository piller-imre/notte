import json

from app import db


class Note(db.Model):
    """A note about an information item"""

    __tablename__ = 'notes'
    id = db.Column(db.Integer, primary_key=True)
    location = db.Column(db.String, nullable=None)
    description = db.Column(db.String)
    tags = db.Column(db.String)

    def to_dict(self):
        """Returns with the dictionary representation of the note"""
        fields = {
            'id': self.id,
            'location': self.location,
            'description': self.description,
            'tags': self.tags
        }
        return fields

    def to_json(self):
        """Returns with the JSON representation of the note"""
        return json.dumps(self.to_dict())
