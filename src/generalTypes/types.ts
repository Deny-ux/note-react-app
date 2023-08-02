// for notes
export type CreationDate = `${number}/${number}/${number}`;
export type CategoryType = "Task" | "Idea" | "Random Thought";

export type SummaryRowType = {
  category: CategoryType;
  archived: number;
  active: number;
};
