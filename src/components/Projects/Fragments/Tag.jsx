import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Tag(props) {
  const { tag, link } = props;
  return (
    <>
      <Link
        to={link}
        target="_blank"
        className="px-3 py-1.5  rounded-lg bg-[#00df9a] font-medium text-sm text-[#000300] cursor-pointer hover:bg-opacity-80"
      >
        {tag}
      </Link>
    </>
  );
}

Tag.propTypes = {
  tag: propTypes.string,
  link: propTypes.string,
};
