import { createContext, useContext } from "react";
import useToggle from "../../hooks/useToggle";

//useContrextApi
const AccordionContext = createContext();
const { Provider } = AccordionContext;

const Accordion = (props) => {
  const { title, content } = props;
  const { status: expand, toggleStatus: toggle } = useToggle();

  const value = {
    expand, 
    toggle
  }

  return (
    <Provider value={value}>
      <div className="accordion">
        <AccordionTitle title={title}/>
        <AcordionContent content={content} expand={expand} />
      </div>
    </Provider>
  );
};

const AccordionTitle = (props) => {
  const { title } = props;
  const {expand, toggle} = useContext(AccordionContext)
  return (
    <>
      <button className="event" onClick={toggle}>
        {title} <span>{expand ? "-" : "+"}</span>
      </button>
    </>
  );
};

const AcordionContent = (props) => {
  const { content } = props;
  const {expand} = useContext(AccordionContext)
  return <>{expand && <div className="content">{content}</div>}</>;
};

export default Accordion;
