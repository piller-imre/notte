from flask.views import MethodView


class NoteView(MethodView):

    def get(self):
        return 'List of the notes'


class TagView(MethodView):

    def get(self):
        return 'List of the tags'
