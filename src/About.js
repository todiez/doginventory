import { useShelterContext } from "./utils/dogShelterContext"

function About() {
    const {dogInventory} = useShelterContext()
    console.log("--------ABOUT")
    console.log(dogInventory)
    console.log("--------")
    return (
      <div className="about">
        <h1>ABOUT PAGE</h1>
      </div>
    );
  }

  export default About;