export const ShoppingProducts = ({ data, addToCar }) => {
  const { id, name, price } = data;
  return (
    <article className="articleCard">
      <h3>{name}</h3>
      <p>{price}</p>
      {/* como el id se lo pasamos ya en el dispatch seria muy redundante
      ponerselo a la funcion addToCar(id) andaria igual pero ya le pasamos el
      id a este componente ShoppingProducts que esta en ShoppingCar.entonces 
      al hacer clic mandara ese id que esta como propiedad de este componente*/}
      <button onClick={() => addToCar()}>Add To Car</button>
    </article>
  );
};
