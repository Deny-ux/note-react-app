import {
  BsFillTrashFill,
  BsFillLightbulbFill,
  BsFillCartFill,
} from "react-icons/bs";
import { RiEditFill } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { BiSolidArchiveIn } from "react-icons/bi";
import { FaHeadSideVirus } from "react-icons/fa";
import { JsxElement } from "typescript";
import { IconType } from "react-icons";
import React from "react";

export const icons = {
  delete: <BsFillTrashFill className="note-icon note-control-icon" />,
  edit: <RiEditFill className="note-icon note-control-icon" />,
  archive: <BiSolidArchiveIn className="note-icon note-control-icon" />,
  "Random Thought": <FaHeadSideVirus className="note-icon category-icon" />,
  Idea: <BsFillLightbulbFill className="note-icon category-icon" />,
  Task: <BsFillCartFill className="note-icon category-icon" />,
};
