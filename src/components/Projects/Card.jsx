import Tag from "./Fragments/Tag";
import propTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Card(props) {
  const { classname, children, dataAos, aosDelay } = props;

  useEffect(() => {
    Aos.init({ duration: 2000 }); // Initialize AOS
  }, []);

  return (
    <div
      className={`bg-gray-900 rounded-2xl overflow-hidden ${classname}`}
      data-aos={`${dataAos}`}
      data-aos-delay={`${aosDelay}`} // Set data-aos-delay based on props
    >
      {children}
    </div>
  );
}

const Header = (props) => {
  const { image, name } = props;
  return <img src={image} alt={name} />;
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="p-8 pb-0">
      <h1 className="font-bold text-xl sm:text-lg md:text-xl lg:text-2xl uppercase text-white mb-2">
        {name}
      </h1>
      <p className="text-sm lg:text-md text-body-color leading-relaxed">
        {children}
      </p>
    </div>
  );
};

const Footer = (props) => {
  const { tag } = props;
  return (
    <div className="flex gap-3 p-8">
      {tag.map((item, index) => (
        <Tag key={index} tag={item.framework} link={item.link} />
      ))}
    </div>
  );
};

Card.propTypes = {
  children: propTypes.node.isRequired,
  classname: propTypes.string,
  dataAos: propTypes.string.isRequired, // Require dataAos prop
  aosDelay: propTypes.number.isRequired, // Require aosDelay prop
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
