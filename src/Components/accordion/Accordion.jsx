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
        <AccordionTitle>{title}</AccordionTitle>
        <AcordionContent>{content}</AcordionContent>
      </div>
    </Provider>
  );
};

const AccordionTitle = ({children}) => {
  const {expand, toggle} = useContext(AccordionContext)
  return (
    <>
      <button className="event" onClick={toggle}>
        {children} <span>{expand ? "-" : "+"}</span>
      </button>
    </>
  );
};

const AcordionContent = ({children}) => {
  const {expand} = useContext(AccordionContext)
  return <>{expand && <div className="content">{children}</div>}</>;
};

export default Accordion;
