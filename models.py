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


class Tag(db.Model):
    """Tag as a label or keyword"""

    __tablename__ = 'tags'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=None)

    def to_dict(self):
        """Returns with the dictionary representation of the tag"""
        fields = {
            'id': self.id,
            'name': self.location
        }
        return fields

    def to_json(self):
        """Returns with the JSON representation of the tag"""
        return json.dumps(self.to_dict())


class Association(db.Model):
    """Association which binds the notes and tags"""

    __tablename__ = 'associations'
    note_id = db.Column(db.Integer, db.ForeignKey('notes.id'), primary_key=True)
    tag_id = db.Column(db.Integer, db.ForeignKey('tags.id'), primary_key=True)
    note = db.relationship('Note', backref='tag_association')
    tag = db.relationship('Tag', backref='note_association')
