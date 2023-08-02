import {
  BsFillTrashFill,
  BsFillLightbulbFill,
  BsFillCartFill,
} from "react-icons/bs";
import { RiEditFill } from "react-icons/ri";
import { BiSolidArchiveIn } from "react-icons/bi";
import { FaHeadSideVirus } from "react-icons/fa";

export const icons = {
  delete: <BsFillTrashFill className="note-icon note-control-icon" />,
  edit: <RiEditFill className="note-icon note-control-icon" />,
  archive: <BiSolidArchiveIn className="note-icon note-control-icon" />,
  "Random Thought": <FaHeadSideVirus className="note-icon category-icon" />,
  Idea: <BsFillLightbulbFill className="note-icon category-icon" />,
  Task: <BsFillCartFill className="note-icon category-icon" />,
};
