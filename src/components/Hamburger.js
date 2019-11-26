import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import dallas from "../images/dallas.webp";
import austin from "../images/austin.webp";
import newyork from "../images/newyork.webp";
import sanfrancisco from "../images/sanfrancisco.webp";
import beijing from "../images/beijing.webp";

const cities = [
  { name: "Dallas", image: dallas },
  { name: "Austin", image: austin },
  { name: "New York", image: newyork },
  { name: "San Francisco", image: sanfrancisco },
  { name: "Beijing", image: beijing }
];

const Hamburger = ({ state }) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      gsap.to([reveal2, reveal1], 0.8, {
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07
        }
      });
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
      console.log(2);
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
      console.log(3);
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], 0.8, {
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1
      }
    });
  };

  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], 0.8, {
      y: 100,
      delay: 0.1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3
      }
    });
  };

  const fadeInUp = node => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut"
    });
  };

  const handleHover = e => {
    gsap.to(e.target, 0.4, {
      y: 3,
      skewX: 4,
      ease: "InOut"
    });
  };

  const handleHoverExit = e => {
    gsap.to(e.target, 0.4, {
      y: -3,
      skewX: 0,
      ease: "InOut"
    });
  };

  const handleCity = city => {
    gsap.to(cityBackground, 0, {
      background: `url(${city}) center center`
    });
    gsap.to(cityBackground, 0.4, {
      opacity: 1
    });
    gsap.from(cityBackground, 0.4, {
      skewX: 2,
      transformOrigin: "center bottom"
    });
  };

  const handleCityReturn = () => {
    gsap.to(cityBackground, 0.4, {
      opacity: 0,
      skewY: 0
    });
  };

  return (
    <div ref={el => (menuLayer = el)} className="hamburger-menu">
      <div ref={el => (reveal1 = el)} className="menu-color"></div>
      <div ref={el => (reveal2 = el)} className="menu-content">
        <div ref={el => (cityBackground = el)} className="city"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to="/opportunities"
                    >
                      Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to="/solutions"
                    >
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      to="/contact-us"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className="info">
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
                {cities.map(el => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image)}
                    onMouseOut={handleCityReturn}
                  >
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
