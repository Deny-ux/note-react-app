import { FaTimes } from "react-icons/fa";
import { hideModals } from "../features/modals/modalsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useState } from "react";
import { CategoryType } from "../generalTypes/types";
import { editNote } from "../features/notes/notesSlice";

const EditNoteModal = () => {
  const dispatch = useDispatch();
  const { notes, activeEditNoteId } = useSelector(
    (state: RootState) => state.notes
  );
  const foundNote = notes.find((note) => note.id === activeEditNoteId);
  const [name, setName] = useState(foundNote?.name);
  const [content, setContent] = useState(foundNote?.content);
  const [category, setCategory] = useState(foundNote?.category);

  if (!foundNote) {
    return (
      <section>
        <h4>Cannot find provided note please refresh the page...</h4>
      </section>
    );
  }
  return (
    <div className="modal edit-modal show-modal">
      <button
        className="close-btn note-control-btn"
        onClick={(e) => {
          dispatch(hideModals());
        }}
      >
        <FaTimes />
      </button>
      <h4>Edit Note</h4>
      <form
        className="modal-form edit-modal-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(hideModals());
          dispatch(
            editNote({
              id: foundNote.id,
              newInfo: {
                category: category as CategoryType,
                content: content as string,
                name: name as string,
              },
            })
          );
        }}
      >
        <div className="form-group row">
          <label htmlFor="note-content" className="col-sm-4 col-form-label">
            New Name
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="note-content"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="note-content" className="col-sm-4 col-form-label">
            New content
          </label>
          <div className="col-sm-8">
            <textarea
              id="note-content"
              className="form-control"
              name="content"
              rows={3}
              placeholder="Eggs, Milk etc."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputState" className="col-sm-4 col-form-label">
            Category
          </label>
          <div className="col-sm-8">
            <select
              id="inputState"
              name="category"
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value as CategoryType)}
            >
              <option value="Task">Task</option>
              <option value="Random Thought">Random Thought</option>
              <option value="Idea">Idea</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="btn create"
          disabled={!Boolean(name && content)}
        >
          Save changes
        </button>
      </form>
    </div>
  );
};
export default EditNoteModal;
