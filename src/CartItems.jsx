const CartItems = ({ plantInCart, removePlantInCart, addPlantToCart }) => {
  return (
    <>
      <figure>
        <p className="cart-plant">
          {plantInCart.image} {plantInCart.name}
        </p>
      </figure>
      <figure className="cart-buttons">
        <button
          onClick={() => {
            removePlantInCart(plantInCart);
          }}
        >
          -
        </button>
        <h3>{plantInCart.quantity}</h3>
        <button
          onClick={() => {
            addPlantToCart(plantInCart);
          }}
        >
          +
        </button>
      </figure>
    </>
  );
};

export default CartItems;
