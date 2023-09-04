import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { LNavBar } from "./components/navBar";


function App() {
  const [summonerName, changeSummonerName] = useState("N/A");
  const [message, setMessage] = useState("");

  async function onClick() {
    var information = await fetch('https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/professorsack?api_key=' + "RGAPI-ee767dbb-cf4a-48fa-b1e8-00d6ab09ab05")
      .then(function (response) {
        return response.json()
      }).then(function (data) {
        // console.log(data[0].data.answer);
        // return data[0].data.answer;
        return data;
      }).catch(error => console.error('Error:', error));
    var statement = "";

    Object.entries(information).forEach((val) => statement += val + "\n");
    console.log(statement);
    changeSummonerName(statement);

  }

    document.body.style.backgroundColor = "grey";

  return (

    <div >
      <LNavBar></LNavBar>
      
    </div>
  );
}

export default App;
