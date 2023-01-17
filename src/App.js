import logo from './logo.svg';
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
      <DogInfo />
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


function App() {
  return (
    <div className="App">
      <ShleterProvider>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
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
