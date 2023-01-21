import Home from "./Home";
import About from "./About";
import './App.css';

import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import ShelterContext from "./utils/dogShelterContext"
import { useShelterContext } from "./utils/dogShelterContext"
import ShleterProvider from "./utils/dogShelterContext"


//COMPONENTS
function DogInfo() {
  return (
    <div className="dogs">
      <h1>THIS IS THE DOG INFO</h1>
      <p>The dog is called </p>
    </div>
  );
}


//PAGES
function AvailableDog() {
  let info = useParams();
  console.log("-------")
  console.log(info.userid)
  console.log("-------")
  
  const {dogInventory, setDogInventory} = useShelterContext()
  console.log("--------SINGULAR DOG")
  console.log(dogInventory)
  console.log("--------")
  setDogInventory([...dogInventory, {name:"Hank", age:5, breed:"Staffordshire"}])
  return (
    <div className="dogs">
      <h1>This is a dog with the id of {info.userid}</h1>
      <DogInfo/>
    </div>
  );
}

function AvailableDogs() {
  const {dogInventory} = useShelterContext()
  console.log("--------AVAILAVLWE DOGS")
  console.log(dogInventory)
  console.log("--------")
  return (
    <div className="dogs">
      <h1>AVAILABLE DOGS PAGE</h1>
    </div>
  );
}



//App is parent to all other components
function App() {
  return (
    <div className="App">
      <ShleterProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/availabledogs" element={<AvailableDogs />} />
            <Route path="/availabledog/:userid" element={<AvailableDog />} />
          </Routes>
        </Router>
      </ShleterProvider>
    </div>
  );
}

export default App;
