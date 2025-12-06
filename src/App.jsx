import Props from "./6 December/Props";
import "./App.css";

export default function App() {
  function greet() {
    console.log("Hello Devs!");
  }

  console.log(greet instanceof Object);
  return (
    <>
      <Props />
    </>
  );
}
