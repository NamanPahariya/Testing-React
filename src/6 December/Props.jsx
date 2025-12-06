import React from "react";

const Props = () => {
  function Button(props) {
    return (
      <>
        <button style={{ color: props.color, fontSize: props.fontSize + "px" }}>
          {props.text}
        </button>
        <div>{props.children}</div>
      </>
    );
  }
  return (
    <>
      <Button text="click me" color="red" fontSize={12}>
        <p>THis is the para for click me button</p>
        <h1>THis is the heading for the click me button</h1>
      </Button>

      <Button text="don't click me" color="blue" fontSize={16}>
        <p>THis is the para for don't click me button</p>
        <h1>THis is the heading for the don't click me button</h1>
      </Button>
      <Button text="click me twice" color="yellow" fontSize={20} />
    </>
  );
};

export default Props;
