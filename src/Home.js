import { useShelterContext, ShelterContexts } from "./utils/dogShelterContext";

function Home() {
  //getting the context inside this component
  const { dogInventory } = useShelterContext();
  console.log(dogInventory);

  return (
    <ShelterContexts.Consumer>
      {(context) => {
        // const { dogInv1 } = context;
        // console.log(dogInv1);
        return (
          <div className="home">
            <h1>HOME PAGE</h1>
            <p>test: {dogInventory[0].name}</p>
          </div>
        );
      }}
    </ShelterContexts.Consumer>
  );
}

export default Home;
