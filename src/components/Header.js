import React, { useRef, useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = ({ history, name }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null
  });

  const handleMenu = () => {
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked
      });
    }
  };

  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false });
    });
    console.log(state);
  });

  return (
    <header>
      <div className='container'>
        {name}
        <div className='wrapper'>
          <div className='inner-header'>
            <div className='logo'>
              <Link to='/'>HMBRG.</Link>
            </div>
            <div className='menu'>
              <button onClick={handleMenu}>MENU</button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} setState={setState} name='Solutions' />
    </header>
  );
};

export default withRouter(Header);
