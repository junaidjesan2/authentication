import Header from "../shared/Header";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
