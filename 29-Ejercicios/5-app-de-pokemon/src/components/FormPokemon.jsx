import { useState } from "react";
import style from "./FormPokemon.module.css";
const initialPokemonSearch = {
  pokemon: "",
};
export const FormPokemon = ({ searchPokemon }) => {
  const [search, setSearch] = useState(initialPokemonSearch);

  const handelSearchPokemon = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
    searchPokemon(search.pokemon);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    searchPokemon(search.pokemon);
  };
  return (
    <form className={style.form} onSubmit={handelSubmit}>
      <input
        className={style.input}
        type="text"
        name="pokemon"
        value={search.pokemon}
        onChange={handelSearchPokemon}
        onKeyDown={handelSearchPokemon}
      />
      <button className={style.buttom}>buscar..</button>
    </form>
  );
};
