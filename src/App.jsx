// import TestState from "./7 Decemver/TestState";
// import TestUseEffect from "./13 December/TestUseEffect";
import { RouterProvider } from "react-router";
import TestUseRef from "./13 December/TestUseRef";
import About from "./14 December/About";
import Home from "./14 December/Home";
import TestControlled from "./20 December/TestControlled";
import TestUnControlled from "./20 December/TestUnControlled";
import "./App.css";
import { router } from "./router";
import Parent from "./27 December/Parent";

export default function App() {
  // const userName = "Naman"
  return (
    <>
      {/* <TestState /> */}
      {/* <TestUseEffect/> */}
      {/* <TestUseRef/> */}
      {/* <Home/> */}
      {/* <About/> */}
      {/* <TestControlled/> */}
      {/* <TestUnControlled/> */}
      {/* <RouterProvider router={router} /> */}
      <Parent userName={userName}/>
    </>
  );
}
