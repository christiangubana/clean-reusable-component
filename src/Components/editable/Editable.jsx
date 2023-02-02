import { useState } from "react";

const Editable = () => {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputvalue] = useState("");

  const toggleEditable = () => setEditable((prevEditable) => !prevEditable);

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
