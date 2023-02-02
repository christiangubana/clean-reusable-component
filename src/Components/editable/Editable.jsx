import { useState } from "react";
import useToggle from "../../hooks/useToggle";

const Editable = () => {
  const [inputValue, setInputvalue] = useState("");

  const { status: editable, toggleStatus: toggleEditable} = useToggle();

  const handleInputChange = (e) => {
    setInputvalue(e.target.value);
  };
  return (
    <div>
      {editable ? (
        <label>
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
      ) : (
        <p>
          Title <span>{inputValue}</span>
        </p>
      )}
      <br />
      {editable ? (
        <button onClick={toggleEditable}>Submit</button>
      ) : (
        <button onClick={toggleEditable}>Edit</button>
      )}
    </div>
  );
};

export default Editable;
