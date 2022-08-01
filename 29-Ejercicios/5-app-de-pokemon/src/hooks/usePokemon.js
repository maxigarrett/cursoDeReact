import { useEffect, useState } from "react";
import { getPokemons } from "../api/pokeApi";
const LIMIT_POKEMON = 5000;
export const usePokemon = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    getPokemons(url).then((data) => setData(data.results));
    setLoading(true);
  }, []);

  return { data, loading };
};
