import { useShelterContext } from "./utils/dogShelterContext"

function Home() {

    const {dogInventory} = useShelterContext()
    console.log("--------")
    console.log(dogInventory)
    console.log("--------")
  
    return (
      <div className="home">
        <h1>HOME PAGE</h1>
      </div>
    );
  }

  export default Home;