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
// import Parent from "./27 December/Parent";
// import UserContext from "./UserContext";
import TestMemo from "./27 December/TestMemo";

export default function App() {
  const isAuthenticated = true;
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
      {/* <UserContext.Provider value={isAuthenticated}>
      <Parent/>
      </UserContext.Provider> */}

      <TestMemo/>
    </>
  );
}
