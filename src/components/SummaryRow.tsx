import { icons } from "../icons";
import { SummaryRowType } from "../generalTypes/types";

type PropsType = {
  notePerCategory: SummaryRowType;
};
const SummaryRow = ({ notePerCategory }: PropsType) => {
  return (
    <article className="single-summary-row">
      <div className="task-name">
        {icons[notePerCategory.category]}
        <p>{notePerCategory.category}</p>
      </div>
      <p>{notePerCategory.active}</p>
      <p>{notePerCategory.archived}</p>
    </article>
  );
};
export default SummaryRow;
