import React, { useState } from "react";

export const Form = ({ searchPeople }) => {
  const initialForm = {
    search: "",
  };
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    if (form.search === "") setForm(initialForm);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.search === "") setForm(initialForm);
    else searchPeople(form.search);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={form.search}
          onChange={handleChange}
          onKeyUp={handleSubmit}
          placeholder="busca un personaje"
        />
        <button>Buscar</button>
      </form>
    </div>
  );
};
