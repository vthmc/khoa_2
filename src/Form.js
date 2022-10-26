import { useState } from "react";
const Form = (props) => {
  const [value, setValue] = useState("");

  const handler = (event) => {
    event.preventDefault();
    setValue("");
    props.setDataListFunc(value);
  };
  const handlerinput = (event) => {
    setValue(event.target.value);
  };
  return (
    <form className="form" onSubmit={handler}>
      <input
        placeholder="Enter task ..."
        value={value}
        onChange={handlerinput}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
