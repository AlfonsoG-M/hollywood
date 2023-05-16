import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
const NavbarContainer = () => {
  const [title, setTitle] = useState("");

  let { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      setTitle("Pupular Titles");
    } else if (pathname === "/movies") {
      setTitle("Popular Movies");
    } else if (pathname === "/series") {
      setTitle("Popular Series");
    } else if (pathname === "/product") {
      setTitle("Product Detail");
    }
  }, [pathname]);

  return (
    <div>
      <Navbar title={title} />
    </div>
  );
};

export default NavbarContainer;
