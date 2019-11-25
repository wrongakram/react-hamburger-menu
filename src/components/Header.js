import React, { useRef, useEffect, useState } from "react";
import Hamburger from "./Hamburger";

export default function Header() {
  let hamburger = useRef(null);

  const [active, setActive] = useState({
    isActive: false
  });

  useEffect(() => {
    console.log(active.isActive);
  }, [active.isActive]);

  const toggleMenu = () => {
    setActive({ isActive: !active.isActive });
  };
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <a href="/">HMBRG.</a>
            </div>
            <div className="menu">
              <button onClick={toggleMenu} ref={el => (hamburger = el)}>
                MENU
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger isActive={active.isActive} toggleMenu={toggleMenu} />
    </header>
  );
}
