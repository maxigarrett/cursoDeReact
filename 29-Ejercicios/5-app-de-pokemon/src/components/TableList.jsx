import style from "./Table.module.css";
export const TableList = ({ poke }) => {
  const pokeId = poke.url.split("/").slice(-2)[0];
  const { name } = poke;
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;

  return (
    <tr className="row">
      <td>{pokeId}</td>
      <td>{name}</td>
      <td>
        <img src={img} alt={name} />
      </td>
    </tr>
  );
};
