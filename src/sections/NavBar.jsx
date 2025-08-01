import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import pokeballIcon from "../../public/assets/pokeball-icon.png";

function NavBar() {
  return( <nav>
    <div className="block">
      <img src={pokeballIcon} alt="pokeball icon" />
    </div>
    <div className="data"></div>
    <div className="block">
      <GiHamburgerMenu/>
    </div>
  </nav>
  );
}

export default NavBar