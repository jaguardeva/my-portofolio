import Card from "./Card";
import PROJECT_LIST from "./projectList";

export default function Projects() {
  return (
    <section className="text-white max-w-[1240px] flex flex-col mx-auto lg:py-24 p-5">
      <h1 className="font-bold text-xl md:text-2xl mb-5">Web Projects</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
        {PROJECT_LIST.map((item, index) => (
          <Card key={index}>
            <Card.Header image={item.image} name={item.name} />
            <Card.Body name={item.name}>{item.desc}</Card.Body>
            <Card.Footer tag={item.tag} />
          </Card>
        ))}
      </div>
    </section>
  );
}
