import React from "react";
import Pokeball1 from "../assets/pokeball.png";
import Pokeball2 from "../assets/pokeball2.png";

function Background() {
  return (
    <div className="background">
      <img src={Pokeball1} alt="Pokeball" className="pokeball pokeball1" />
      <img src={Pokeball2} alt="Pokeball" className="pokeball pokeball2" />
      <img src={Pokeball1} alt="Pokeball" className="pokeball pokeball3" />
      <img src={Pokeball2} alt="Pokeball" className="pokeball pokeball4" />
      <img src={Pokeball1} alt="Pokeball" className="pokeball pokeball5" />
      <img src={Pokeball2} alt="Pokeball" className="pokeball pokeball6" />
    </div>
  );
}

export default Background;
