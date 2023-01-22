import Home from "./Home";
import About from "./About";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import ShelterContexts from "./utils/dogShelterContext";//same ShelterContext from file
import ShelterProvider, { useShelterContext } from "./utils/dogShelterContext";

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
  console.log(info);

  const {dogInventory, setDogInventory} = useShelterContext();

  setDogInventory([...dogInventory, {name:"Ida", age:30, breed:"dog trainer"}])

  console.log(dogInventory);

  return (
    <div className="dogs">
      <h1>This is a dog with the id of {info.userid}</h1>
      <DogInfo />
    </div>
  );
}

function AvailableDogs() {
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
      <ShelterProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/availabledogs" element={<AvailableDogs />} />
            <Route path="/availabledog/:userid" element={<AvailableDog />} />
          </Routes>
        </Router>
      </ShelterProvider>
      
    </div>
  );
}

export default App;
