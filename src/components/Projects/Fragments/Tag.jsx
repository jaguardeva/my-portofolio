import React from "react";
import { Link } from "react-router-dom";

export default function Tag(props) {
  const { name, link } = props;
  return (
    <>
      <Link
        to={link}
        target="_blank"
        className="px-3 py-1.5 mx-1 rounded-lg bg-[#00df9a] font-medium text-sm text-[#000300] cursor-pointer hover:bg-opacity-80"
      >
        {name}
      </Link>
    </>
  );
}
