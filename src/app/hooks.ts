import { useSelector } from "react-redux";
import { RootState } from "./store";
import { SummaryRowType } from "../generalTypes/types";

export function useNotesByCategories() {
  const notes = useSelector((state: RootState) => state.notes.notes);

  const categories = new Set(notes.map(({ category }) => category));
  let sortedByCategoryNotes: SummaryRowType[] = [];
  categories.forEach((category) => {
    const activeAndArchivedObject = notes.reduce(
      (acc, curr) => {
        if (curr.category === category) {
          curr.isArchived
            ? (acc.archived = acc.archived + 1)
            : (acc.active = acc.active + 1);
        }
        return acc;
      },
      { archived: 0, active: 0 }
    );

    sortedByCategoryNotes.push({
      category,
      ...activeAndArchivedObject,
    });
  });

  return sortedByCategoryNotes;
}
