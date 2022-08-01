import { useEffect, useState } from "react";
import { getPokemons } from "../api/pokeApi";
import { usePokemon } from "../hooks/usePokemon";
import { FormPokemon } from "./FormPokemon";
import { Table } from "./Table";

const LIMIT_POKEMON = 5000;
const URL = `https://pokeapi.co/api/v2/pokemon/?offset=20&limit=${LIMIT_POKEMON}`;
export const TablePokeApp = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentValue, setCurrentValue] = useState(0);

  const { data, loading } = usePokemon(URL);
  useEffect(() => {
    setPokemons(data);
  }, [data]);

  //acortamos todos los datos que traemos a solo los primeros 5 resultados del array
  const pokeShort = () => {
    const arraypokeShort = pokemons.slice(currentValue, currentValue + 4);
    return arraypokeShort;
  };

  // para cambiar el valor del cuurentValue y hacer andar la paginacion en base a ese estado
  const next_5 = () => {
    console.log(currentValue, pokemons.length);
    if (currentValue < pokemons.length - 5)
      setCurrentValue((currentValue) => currentValue + 4);
  };
  const prev_5 = () => {
    console.log(currentValue, pokemons.length);
    if (currentValue >= 4) setCurrentValue((currentValue) => currentValue - 4);
  };

  const searchPokemon = (pokemon) => {
    if (pokemon === "") {
      getPokemons(URL).then((data) => setPokemons(data.results));
    }

    const findPokemon = (poke) => poke.name.includes(pokemon);
    const newArrayPokemonFilter = pokemons.filter(findPokemon);
    setCurrentValue(0);
    setPokemons(newArrayPokemonFilter);
  };
  return (
    <div>
      <FormPokemon searchPokemon={searchPokemon} />
      {!loading || pokemons.length === 0
        ? "cargando"
        : pokemons && (
            <Table dataPoke={pokeShort()} next_5={next_5} prev_5={prev_5} />
          )}
    </div>
  );
};
