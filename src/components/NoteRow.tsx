import { icons } from "../icons";
import { SingleNote } from "../features/notes/notesTypes";
import { changeDateFormat, extractDates } from "../utils/dates";
import { sliceSentence } from "../utils/util";

type PropsType = {
  note: SingleNote;
};

const NoteRow = ({ note }: PropsType) => {
  return (
    <article className="single-task tasks-row" date-id={note.id}>
      <div className="task-name">
        <div className="category-icon-container">{icons[note.category]}</div>
        <p>{sliceSentence(note.name)}</p>
      </div>
      <p>{changeDateFormat(note.createdAt)}</p>
      <p>{note.category}</p>
      <p>{sliceSentence(note.content)}</p>
      <p>{sliceSentence(extractDates(note.content))}</p>
      <div className="single-task-btns">
        <button
          className="note-control-btn"
          onClick={() => {
            console.log("edit");
          }}
        >
          {icons.edit}
        </button>
        <button
          className="note-control-btn"
          onClick={() => {
            console.log("archive");
            console.log(note.id);
          }}
        >
          {icons.archive}
        </button>
        <button
          className="note-control-btn"
          onClick={() => {
            console.log("delete");
          }}
        >
          {icons.delete}
        </button>
      </div>
    </article>
  );
};
export default NoteRow;
