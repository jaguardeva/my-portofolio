import React from "react";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

export default function Button(props) {
  const { name, link } = props;
  return (
    <div>
      <Link
        to={link}
        target="_blank"
        className="mt-10 flex flex-row justify-center items-center w-[150px] px-3 py-2 bg-slate-200 rounded-lg text-[#000300] font-medium hover:bg-opacity-80"
      >
        <p>{name}</p>
        <BiRightArrowAlt size={20} />
      </Link>
    </div>
  );
}
