import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../features/notes/notesSlice";
import { CategoryType } from "../generalTypes/types";
import { hideModals } from "../features/modals/modalsSlice";
import { FaTimes } from "react-icons/fa";

const CreateNoteModal = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<CategoryType>("Task");
  const dispatch = useDispatch();
  return (
    <div className="modal create-modal show-modal ">
      <button
        className="close-btn note-control-btn"
        onClick={(e) => {
          dispatch(hideModals());
        }}
      >
        <FaTimes />
      </button>
      <h4>Create New Note</h4>
      <form className="modal-form">
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
            name
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="inputPassword"
              name="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="note-content" className="col-sm-4 col-form-label">
            Type content here
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
          onClick={(e) => {
            dispatch(createNote({ category, content, name }));
            dispatch(hideModals());
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
};
export default CreateNoteModal;
