import { SummaryRowType } from "../generalTypes/types";
type PropsType = {
  notePerCategory: SummaryRowType;
};
const SummaryRow = ({ notePerCategory }: PropsType) => {
  return <div>SummaryRow</div>;
};
export default SummaryRow;
