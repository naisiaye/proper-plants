import PLANTS from "./data";
import PlantList from "./PlantList";
import Cart from "./Cart";
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const addPlantToCart = (selectedPlant) => {
    const plantInCart = cartItems.find((cartPlant) => {
      return selectedPlant.id === cartPlant.id;
    });

    if (plantInCart) {
      setCartItems(
        cartItems.map((cartPlant) => {
          return cartPlant.id === plantInCart.id
            ? { ...cartPlant, quantity: cartPlant.quantity + 1 }
            : cartPlant;
        })
      );
    } else {
      const addPlant = { ...selectedPlant, quantity: 1 };
      setCartItems([...cartItems, addPlant]);
    }
  };

  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <PlantList PLANTS={PLANTS} addPlantToCart={addPlantToCart} />
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          addPlantToCart={addPlantToCart}
        />
      </main>
    </>
  );
}
