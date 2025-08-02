import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import pokeballIcon from "../assets/pokeball-icon.png";
import { Link } from 'react-router-dom';

function NavBar() {
  const navigateRoutes = [
  { name: 'Search', route: '/search' },
  { name: 'Pokemon', route: '/pokemon' },
  { name: 'My list', route: '/list' },
  { name: 'Compare', route: '/compare' },
  { name: 'About', route: '/about' },
];
  return( <nav>
    <div className="block">
      <img src={pokeballIcon} alt="pokeball icon" />
    </div>
    <div className="data">
      <ul>
        {
          navigateRoutes.map(({name,route},index) =>{
            return <Link to={route} key={index}>
              <li>
                {name}
              </li>
            </Link>
          }) 
        }
      </ul>
    </div>
    <div className="block">
      <GiHamburgerMenu/>
    </div>
  </nav>
  );
}

export default NavBar