import React, { useEffect } from "react";
import Wrapper from "../sections/Wrapper";
import Login from "../components/Login";
import { useDispatch, useSelector } from "react-redux";
import { getUserPokemons } from "../app/reducers/getUserPokemons";
import PokemonCardGrid from "../components/PokemonCardGrid";

function MyList() {
  const { userInfo } = useSelector(({ app }) => app);
  const { userPokemons } = useSelector(({ pokemon }) => pokemon);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUserPokemons());
  }, [userInfo, dispatch]);

  return (
    <div className="list">
      {userInfo ? <PokemonCardGrid pokemons={userPokemons} /> : <Login />}
    </div>
  );
}

export default Wrapper(MyList);