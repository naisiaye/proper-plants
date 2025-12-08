import PlantListItem from "./PlantListItem";

const PlantList = ({ PLANTS, addPlantToCart }) => {
  return (
    <section id="plant-list">
      <h2>Plants</h2>
      <ul>
        {PLANTS.map((plant) => {
          return (
            <PlantListItem
              key={plant.id}
              plant={plant}
              addPlantToCart={addPlantToCart}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default PlantList;
