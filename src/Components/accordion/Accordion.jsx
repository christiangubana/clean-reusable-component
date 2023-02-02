import useToggle from "../../hooks/useToggle";

const Accordion = (props) => {
  const { title, content } = props;
  const { status: expand, toggleStatus: toggle } = useToggle();

  return (
    <div className="accordion">
      <AccordionTitle title={title} expand={expand} toggle={toggle} />
      <AcordionContent content={content} expand={expand} />
    </div>
  );
};

const AccordionTitle = (props) => {
  const { title, expand, toggle } = props;
  return (
    <>
      <button className="event" onClick={toggle}>
        {title} <span>{expand ? "-" : "+"}</span>
      </button>
    </>
  );
};

const AcordionContent = (props) => {
  const { expand, content } = props;
  return <>{expand && <div className="content">{content}</div>}</>;
};

export default Accordion;
