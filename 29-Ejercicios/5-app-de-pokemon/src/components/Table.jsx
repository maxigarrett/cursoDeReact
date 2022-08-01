import { TableList } from "./TableList";
import style from "./Table.module.css";
export const Table = ({ dataPoke, next_5, prev_5 }) => {
  return (
    <>
      <table className={style.table} summary="grupo de pokemons">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">img</th>
          </tr>
        </thead>
        <tbody>
          {dataPoke.map((poke, index) => (
            <TableList key={index} poke={poke} />
          ))}
        </tbody>
        <tfoot>
          <tr className={style.buttonContainer}>
            <td>
              <button className={style.buttonTable} onClick={prev_5}>
                prev
              </button>
            </td>
            <td>
              <button className={style.buttonTable} onClick={next_5}>
                next
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
