import React, { useEffect, useState } from "react";
import { getCharacter, getPeople, getSerchPeople } from "./api/people";
import { Form } from "./components/Form";

function App() {
  const [people, setPeople] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(1);
  const [showPeople, setShowPeople] = useState("");
  const [formSearchPeople, setFormSearchPeople] = useState({});

  const [pagination, setPagination] = useState(1);

  const [errorState, setErrorState] = useState({ hasError: true });

  const handelError = () => setErrorState({ hasError: false });

  useEffect(() => {
    getPeople(pagination)
      .then((data) => {
        // console.log(data.results);
        setPeople(data);
      })
      .catch(handelError);
  }, [pagination]);

  useEffect(() => {
    getCharacter(currentCharacter)
      .then((data) => setShowPeople(data))
      .catch((err) => console.log(err));
  }, [currentCharacter]);

  const showDetails = (character) => {
    // console.log(character.url.split("/").slice(-2)[0]);
    const id = Number(character.url.split("/").slice(-2)[0]);
    setCurrentCharacter(id);
    // console.log(showPeople);
  };

  //funcion buscador de personaje
  const searchPeople = (form) => {
    setFormSearchPeople(form);
    getSerchPeople(formSearchPeople).then((data) => {
      // console.log(data);
      setPeople(data);
    });
  };

  //funcion para hacer el paginado de la App
  const handelNexAndPrevius = (nextAndPrv) => {
    console.log(pagination);
    if (pagination + nextAndPrv > 9) return;
    if (pagination + nextAndPrv < 1) return;

    setPagination(pagination + nextAndPrv);
  };

  return (
    <section className="section">
      <Form searchPeople={searchPeople} />

      <ul className="list">
        {people.results &&
          people.results.map((character) => (
            <li
              style={{ cursor: "pointer" }}
              className="list__details"
              key={character.name}
              onClick={() => showDetails(character)}
            >
              {character.name}
            </li>
          ))}
      </ul>

      <div className="section__details">
        {showPeople && (
          <aside>
            <h2>{showPeople.name}</h2>
            <ul className="list">
              <li className="list__item">masa: {showPeople.mass}</li>
              <li className="list__item">altura: {showPeople.height}</li>
              <li className="list__item">
                edad-nacimiento: {showPeople.birth_year}
              </li>
            </ul>
          </aside>
        )}
      </div>

      <div>
        <button onClick={() => handelNexAndPrevius(+1)}>next</button>
        <button onClick={() => handelNexAndPrevius(-1)}>prev</button>
      </div>
    </section>
  );
}

export default App;
