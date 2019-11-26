import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Hamburger = ({ state, setState, name }) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);

  useEffect(() => {
    hideMenu(menuLayer);
    if (state.initial === false) {
      gsap.to(menuLayer, { duration: 0, css: { display: "none" } });
    } else if (state.clicked === false) {
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
      gsap.to([reveal1, reveal2], 0.8, {
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.2
        }
      });
    } else if (state.clicked === true && state.initial === null) {
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        ease: "power3.InOut"
      });
      staggerReveal(reveal1, reveal2);
      staggerText(line1, line2, line3);
    } else if (state.clicked === true) {
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  const hideMenu = node => {
    gsap.to(node, 0, { css: { visibility: "visible" } });
  };

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], 0.8, {
      height: 0,
      transformOrigin: "right top",
      skewY: 3,
      ease: "power3.inOut",
      webkitClipPath: "inset(50% 0% 0%)",
      stagger: {
        amount: 0.1
      }
    });
  };

  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], 0.8, {
      y: 100,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2
      }
    });
  };

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div className='menu-color overlay'></div>
      <div ref={el => (reveal1 = el)} className='menu-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-content'>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li ref={el => (line1 = el)}>
                    <Link to='/opportunities'>Opportunities</Link>
                  </li>
                  <li ref={el => (line2 = el)}>
                    <Link to='/solutions'>{name}</Link>
                  </li>
                  <li ref={el => (line3 = el)}>
                    <Link to='/contact-us'>Contact us</Link>
                  </li>
                </ul>
              </nav>
              <div className='info'>
                <h3>Our Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p>
              </div>
              <div className='locations'>
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
};

export default Hamburger;
