// Import React
import Tag from "./Fragments/Tag"; // Import Tag component
import propTypes from "prop-types";

function Card({ children }) {
  return (
    <div className=" bg-gray-900 rounded-2xl overflow-hidden">{children}</div>
  );
}

const Header = (props) => {
  const { image, name } = props;
  return <img src={image} alt={name} />;
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <>
      <div className="p-8 pb-0">
        <h1 className="font-bold text-xl sm:text-lg md:text-xl lg:text-2xl uppercase text-white mb-2">
          {name}
        </h1>
        <p className=" text-sm lg:text-md text-body-color leading-relaxed">
          {children}
        </p>
      </div>
    </>
  );
};

const Footer = (props) => {
  const { tag } = props;
  return (
    <div className="flex gap-3 p-8">
      {tag.map((item, index) => {
        return <Tag key={index} tag={item.framework} link={item.link} />;
      })}
    </div>
  );
};

Card.propTypes = {
  children: propTypes.node.isRequired,
};
Header.propTypes = {
  image: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

Body.propTypes = {
  name: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

Footer.propTypes = {
  tag: propTypes.array.isRequired,
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
