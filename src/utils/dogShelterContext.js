import React, {useState, useContext} from "react"

export const ShelterContext = React.createContext()

export const useShelterContext = ()=> useContext(ShelterContext) 

export default function ShelterProvider({children}){
    const [dogInventory, setDogInventory]= useState([{userid:1234, name:"Runa", balance:2},{userid:5678, name:"skadi", age:3, breed:"Bulldog"}])
    
return(
    <ShelterContext.Provider value={{setDogInventory, dogInventory}}>
        {children}
    </ShelterContext.Provider>
)}

//form that will get the users id (123)