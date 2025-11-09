import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout() {
  return (
    <div className="h-screen flex flex-col justify-start items-start">
      <Navbar />
      <div className="w-[90vw] h-min-full m-auto grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
