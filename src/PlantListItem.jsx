const PlantListItem = ({ plant, addPlantToCart }) => {
  return (
    <li>
      <p className="plant-pic">{plant.image}</p>
      <p className="plant-name">{plant.name}</p>
      <button
        onClick={() => {
          addPlantToCart(plant);
        }}
      >
        Add
      </button>
    </li>
  );
};

export default PlantListItem;
