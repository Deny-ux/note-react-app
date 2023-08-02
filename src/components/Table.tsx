import { useSelector } from "react-redux";
import { SingleNote } from "../features/notes/notesTypes";
import NoteRow from "./NoteRow";
import { selectNotes } from "../features/notes/notesSlice";
import { RootState } from "../app/store";
import { CategoryType } from "../generalTypes/types";
import { useNotesByCategories } from "../app/hooks";
import SummaryRow from "./SummaryRow";
type PropsType = {
  tableFor: "Summary" | "List of notes";
};

const Table = ({ tableFor }: PropsType) => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  let notesPerCategory = useNotesByCategories();

  console.log(notes);
  if (tableFor === "List of notes") {
    return (
      <>
        <button className="show-switch btn">Show archived notes</button>
        <section className="tasks section">
          <header className="section-header tasks-row">
            <p className="header-first-column">Name</p>
            <p>Created</p>
            <p>Category</p>
            <p>Content</p>
            <p>Dates</p>
            <div className="task-btns-container">
              <i className="fa-solid fa-square-caret-down"></i>
              <i className="fa-solid fa-trash"></i>
            </div>
          </header>
          <section className="tasks-container">
            {notes.map((singleNote) => (
              <NoteRow key={singleNote.id} note={singleNote} />
            ))}
          </section>
          <button className="btn" id="createBtn">
            Create Note
          </button>
        </section>
      </>
    );
  }

  console.log(notesPerCategory);

  return (
    <section className="summary section">
      <header className="single-summary-row section-header">
        <p className="header-first-column">Note Category</p>
        <p>Active</p>
        <p>Archived</p>
      </header>
      <section className="summary-container">
        {notesPerCategory.map((notePerCategory, index) => (
          <SummaryRow notePerCategory={notePerCategory} key={index} />
        ))}
      </section>
    </section>
  );
  // }
};
export default Table;
