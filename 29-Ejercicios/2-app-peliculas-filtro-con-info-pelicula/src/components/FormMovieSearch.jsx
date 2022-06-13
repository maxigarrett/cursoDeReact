import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import style from "./FormMovieSearch.module.css";
const initialFormSearch = {
  search: "",
};
export const FormMovieSearch = ({ setMovies, setPageNumeration }) => {
  const [form, setForm] = useState(initialFormSearch);
  const history = useHistory();

  const handelChange = (e) => {
    const { name, value } = e.target;
    setMovies([]);
    setPageNumeration(1);
    setForm({
      ...form,
      [name]: value,
    });
    history.push(`?search=${value}`);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!form.search || form.search === "")
      return alert("ingrese algun dato a buscar");

    //reseteamos las variable para que no concatene lo que hay con lo nuevo buscado
    // setMovies([]); si limpio el array no me muestra la pelicula cuando el usuario da clic en buscar o enter
    setPageNumeration(1);

    history.push(`?search=${form.search}`);
  };
  return (
    <form onSubmit={handelSubmit} className={style.form}>
      <input
        className={style.inputSearchMovie}
        type="text"
        name="search"
        onChange={handelChange}
        value={form.search}
      />
    </form>
  );
};
