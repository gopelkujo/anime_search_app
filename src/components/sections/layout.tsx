import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="w-[90vw] min-h-96 m-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
