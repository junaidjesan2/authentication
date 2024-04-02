import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Router } from "./route/route";
import Context from "./context/context";

function App() {
  return (
    <>
      <Context>
        <RouterProvider router={Router}></RouterProvider>
      </Context>
    </>
  );
}

export default App;
