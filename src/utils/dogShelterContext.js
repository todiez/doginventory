import React, { useState, useContext } from "react";

//initializing context
export const ShelterContexts = React.createContext();

//this is actually using context, making it available
export const useShelterContext = () => useContext(ShelterContexts);

//one element in which all others can be rendered out within
//keyword children needs to be children and nothing else
export default function ShelterProvider({ children }) {
  const [dogInventory, setDogInventory] = useState([
    { name: "runa", age: 2, breed: "pit" },
    { name: "Paz", age: 6, breed: "mix" },
  ]);
  //could also be the clients of an application of the database

  return (
    <ShelterContexts.Provider value={{dogInventory, setDogInventory}}>
        {/* with setDogInvenotry the the context dogInventory (e.g.name) can be changed */}
      {children}
    </ShelterContexts.Provider>
  );
}
