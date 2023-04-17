import * as React from "react";
import { useEffect, useState } from "react";

const IntervieAnswers = () => {
  const [counter, setCounter] = useState(0); // How to create a counter with useState

  const [activity, setActivity] = useState([]);

  const [drivers, setDriver] = useState([]);
  const [newFilteredDriver, setNewFilteredDriver] = useState([]);
const randomDriverIndex = Math.floor(Math.random() * drivers.length);


  const [searchField, setSearchField] = useState(""); //value,setValue. searchFiled has '' as default value

  useEffect(() => {
    loadActivity();
  }, []); //we render it,when sometthing in Array is changing

  function loadActivity() {
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => setActivity(data.activity));
  }

  // We create this fetch to show Names on the page
 useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/users")
     .then((response) => response.json())
     .then((data) => {
       setDriver(data);
     });
 }, []);

 useEffect(() => {
   const newFilteredDrivers = drivers.map((driver) => {
     return driver.name;
   });
   setNewFilteredDriver(newFilteredDrivers);
 }, [drivers]);

  /// Get and show info with Search input

   const onSearchChange = (event) => {
     const searchFieldString = event.target.value.toLocaleLowerCase();
     console.log(searchFieldString)
     setSearchField(searchFieldString);
   };

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click to increase
      </button>
      <div>
        <h5>{activity}</h5>
        <button onClick={loadActivity}>Show another activity</button>
      </div>
      <h5>'Name' {newFilteredDriver[randomDriverIndex]}</h5>
        <h3>Search field and its result in p-tag</h3>
      <br />
      <label>Enter your username:</label>
      <input
        className="input-field"
        id="input-field"
        type="text"
        placeholder="Input"
        onChange={onSearchChange}
      ></input>
      <p>Result: {searchField}</p>
    </div>
  );
};

export default IntervieAnswers;
