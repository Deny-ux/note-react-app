import { CategoryType, CreationDate } from "../../generalTypes/types";

export interface SingleNote {
  id: string;
  createdAt: CreationDate;
  name: string;
  category: CategoryType;
  content: string;
  isArchived: boolean;
}

export interface CreateNote {
  name: string;
  category: CategoryType;
  content: string;
}

export interface NotesState {
  notes: SingleNote[];
  activeEditNoteId: string;
}

export interface EditNote {
  id: string;
  newInfo: {
    name: string;
    category: CategoryType;
    content: string;
  };
}
