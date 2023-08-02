import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { nanoid } from "@reduxjs/toolkit";
import { createStringDate } from "../../utils/dates";
import { CreateNote, EditNote, NotesState, SingleNote } from "./notesTypes";

const initialState: NotesState = {
  notes: [
    {
      createdAt: "20/05/2021",
      name: "Shopping list",
      category: "Task",
      content: "Tomatoes, bread",
      isArchived: false,
      id: "1",
    },
    {
      createdAt: "28/7/2023",
      name: "college task",
      category: "Task",
      content: "Finish project report by Friday",
      isArchived: false,
      id: "2",
    },
    {
      createdAt: "15/3/2022",
      name: "Thought in Friday",
      category: "Random Thought",
      content:
        "The journey of a thousand miles in 3/5/2021 begins with a single step",
      isArchived: false,
      id: "3",
    },
    {
      createdAt: "01/12/2021",
      name: "Today's goal",
      category: "Idea",
      content: "Create a new mobile app for productivity",
      isArchived: true,
      id: "4",
    },
    {
      createdAt: "28/07/2023",
      name: "Udemy course",
      category: "Task",
      content: "Complete project milestone",
      isArchived: false,
      id: "5",
    },
    {
      createdAt: "15/03/2022",
      name: "Wednesday",
      category: "Random Thought",
      content: "Today is a beautiful day.",
      isArchived: true,
      id: "6",
    },
    {
      createdAt: "01/12/2021",
      name: "Coding",
      category: "Idea",
      content: "Create a new product feature.",
      isArchived: false,
      id: "7",
    },
  ],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    createNote: (state, action: PayloadAction<CreateNote>) => {
      console.log("createNote");

      const newNote: SingleNote = {
        ...action.payload,
        id: nanoid(),
        createdAt: createStringDate(new Date()),
        isArchived: false,
      };
      state.notes.push(newNote);
    },
    // payload: id
    switchArchiveNoteState: (state, action: PayloadAction<string>) => {
      console.log("switchArchiveNoteState");

      const foundNote = state.notes.find((note) => note.id === action.payload);
      if (!foundNote) {
        throw new Error(`Cannot find note with provided id: ${action.payload}`);
      }
      foundNote.isArchived = !foundNote.isArchived;
    },
    //
    editNote: (state, action: PayloadAction<EditNote>) => {
      console.log("editNote");
      let foundNote = state.notes.find((note) => note.id === action.payload.id);
      console.log(foundNote);

      // foundNote = { ...action.payload.newInfo,  };
    },
  },
});

export const { editNote, createNote, switchArchiveNoteState } =
  notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes.notes;

export default notesSlice.reducer;
