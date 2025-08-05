import React ,{useEffect} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import pokeballIcon from "../assets/pokeball-icon.png";
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation()
  const navigateRoutes = [
  { name: 'Search', route: '/search' },
  { name: 'Pokemon', route: '/pokemon' },
  { name: 'My list', route: '/list' },
  { name: 'Compare', route: '/compare' },
  { name: 'About', route: '/about' },
];

useEffect(() => {
  const index = navigateRoutes.findIndex(({route}) =>location.pathname.includes(route));
  ul(index);
},[location.pathname,navigateRoutes]);

function ul(index) {
  const underline = document.querySelectorAll<HTMLElement>(".underline");
  for(let i =0; i < underline.lenght; i++) {
    underline[i].style.transform = "translated3d(" + index * 100+"%,0,0)";
  }
}
  return( <nav>
    <div className="block">
      <img src={pokeballIcon} alt="pokeball icon" />
    </div>
    <div className="data">
      <ul>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
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