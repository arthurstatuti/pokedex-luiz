import React from "react";
import { useNavigate } from "react-router";
import BtnPokemonList from "./BtnPokemonList";
import BtnSearchPokemon from "./BtnSearchPokemon";
import BtnMyPokemon from "./BtnMyPokemon";

function Header() {
  const email = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  return (
    <div>

      <div>

        <h1>POKÉDEX</h1>

        <span >
          {email ? `${email}` : `Welcome!`}
        </span>

        <span>
          <button
            type="button"
            onClick={() => navigate('/')} >
            Logout
          </button>
        </span>

      </div>

      <nav>

        <button type="button" onClick={() => navigate('/home')} >Home</button>

        <BtnPokemonList />
        <BtnSearchPokemon />
        <BtnMyPokemon />

      </nav>

    </div >
  );
};

export default Header;