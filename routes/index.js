import notebook from '../controllers/notebookControllers'

export default (app) => {
    app.route('/notes')
        .get(notebook.getAllNotes)
        .post(notebook.createNote)
    app.route('/note/:noteId')
        .get(notebook.getNote)
        .put(notebook.updateNote)
        .delete(notebook.deleteNote)

}