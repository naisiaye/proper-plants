import CartItems from "./CartItems";

const Cart = ({ cartItems, setCartItems, addPlantToCart }) => {
  return (
    <section id="cart">
      <h2>Cart</h2>
      <div id="cart-items">
        {cartItems.map((plantInCart) => {
          return (
            <CartItems
              key={plantInCart.id}
              plantInCart={plantInCart}
              cartItems={cartItems}
              setCartItems={setCartItems}
              addPlantToCart={addPlantToCart}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Cart;
