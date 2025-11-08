import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout() {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="w-screen min-h-96">
          <Outlet />
        </div>
        <Footer />
      </body>
    </html>
  );
}
