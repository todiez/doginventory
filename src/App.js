import Home from "./Home";
import About from "./About";
import './App.css';

import { BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';




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

  return (
    <div className="dogs">
      <h1>This is a dog with the id of {info.userids}</h1>
      <DogInfo/>
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
      
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/availabledogs" element={<AvailableDogs />} />
            <Route path="/availabledog/:userids" element={<AvailableDog />} />
          </Routes>
        </Router>
  
    </div>
  );
}

export default App;
