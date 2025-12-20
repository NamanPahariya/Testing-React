import React, { useRef } from "react";

const TestUnControlled = () => {
  const userName = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${userName.current.value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">user Name:</label>
        <input id="userName" type="text" ref={userName} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestUnControlled;
