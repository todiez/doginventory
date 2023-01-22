import { useShelterContext } from "./utils/dogShelterContext"


function Home() {

  //getting the context inside this component
  const {dogInventory} = useShelterContext();
  console.log(dogInventory);

    return (
      <div className="home">
        <h1>HOME PAGE</h1>
      </div>
    );
  }

  export default Home;