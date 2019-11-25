import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Hamburger(isActive) {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);

  useEffect(() => {
    hideMenu(menuLayer);
    if (isActive.isActive === false) {
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
      gsap.to([reveal1, reveal2], {
        duration: 1,
        opacity: 0,
        ease: "power3.InOut"
      });
    } else {
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        ease: "power3.InOut"
      });
      staggerReveal(reveal1, reveal2);
    }
  }, [isActive.isActive]);

  const hideMenu = node => {
    gsap.to(node, 0, { css: { visibility: "visible" } });
  };

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], 0.6, {
      height: 0,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2
      }
    });
  };

  return (
    <div ref={el => (menuLayer = el)} className="hamburger-menu">
      <div className="menu-color overlay"></div>
      <div ref={el => (reveal1 = el)} className="menu-color"></div>
      <div ref={el => (reveal2 = el)} className="menu-content">
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>Opportunities</li>
                  <li>Solutions</li>
                  <li>Contact us</li>
                </ul>
              </nav>
              <div className="info">
                <h3>Our Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p>
              </div>
              <div className="locations">
                Locations:
                <span>Dallas</span>
                <span>Austin</span>
                <span>New York</span>
                <span>San Francisco</span>
                <span>Beijing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
