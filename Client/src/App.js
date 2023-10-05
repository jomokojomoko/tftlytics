import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import React, { useState } from 'react';
import { LNavBar } from "./components/navBar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";



function App() {
  const [summonerName, changeSummonerName] = useState("N/A");
  const [message, setMessage] = useState("");
  const [formSummoner, setFormSummoner] = useState("");
  let navigate = useNavigate();
  function updateSummonerName() {
    changeSummonerName(formSummoner);
    setFormSummoner("");
    navigate("/Home");
  }
  function updateFormSummoner(event) {
    setFormSummoner(event.target.value);
  }
  document.body.style.backgroundColor = "grey";

  return (

    <div >
      <LNavBar></LNavBar>
      <Form>
        <Form.Label>Summoner Name</Form.Label>
        <Form.Control placeholder="Enter your summoner name" value={formSummoner} onChange={updateFormSummoner} />
        <Button onClick={updateSummonerName}>Submit</Button>
      </Form>

    </div>
  );
}

export default App;
