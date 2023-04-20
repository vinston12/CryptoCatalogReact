import React, { useState, useEffect } from 'react';
import Crypto from "./Crypto";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => { // hook ktory laczy metody m.in. componentDidMount 
    axios.get("http://localhost:8080/map").then((response) => {
      setData(response.data);
    });
  }, []);// te klamry sa tu po to zeby nie odwiezalo nam sie ch chwile tylko raz na przealadowanuie

  if (data.length === 0) {
    return <div>Laduje dane </div>;
  }



  return (
    <div>
      
      <Crypto data={data}/>
    </div>
  );
}

export default App;