import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BarChart } from './components/barChart';
import { Key } from './utils/Keys';
import {Data} from './utils/Data'
import { useFetch } from 'react-async'



function HomePage() {
  const [roundBarData, setRoundBarData] = useState(Data);
  const [placementBarData, setPlacementBarData] = useState(Data);


  useEffect(() => {
    fetch('http://localhost:8000/matches')
      .then((res) => res.json())
      .then(function (data) {
        const sumRounds = new Map();
        const labels=[];
        const sums=[];
        data.LastRoundList.forEach((match) => match.forEach((person) => sumRounds.set(person, sumRounds.has(person) ? sumRounds.get(person) + 1 : 1)))
        console.log(sumRounds)
        sumRounds.forEach(function(value,key){
          labels.push(key);
          sums.push(value);
        })
        const BarData={ labels,
          datasets: [
            {
              data: sums,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],}
          setRoundBarData(BarData);
      });

      fetch('http://localhost:8000/playerInfo')
      .then((res) => res.json())
      .then(function (data) {
        const sumPlacement = new Map();
        const labels=[];
        const sums=[];
        console.log(data)
        data.PlayerInfo.forEach((person) => sumPlacement.set(person.placement, sumPlacement.has(person.placement) ? sumPlacement.get(person.placement) + 1 : 1))
        sumPlacement.forEach(function(value,key){
          labels.push(key);
          sums.push(value);
        })
        const BarData={ labels,
          datasets: [
            {
              data: sums,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],}
          console.log(BarData)
          setPlacementBarData(BarData);
      });
  }, []);



  return (
    <div>

      <BarChart styleBar={{ width: '45%', float: 'left' }} xAxis="Rounds Lasted" yAxis="Count of Players" data={roundBarData} title="Average Round Ended"/>
      <BarChart styleBar={{ width: '45%', float: 'left' }} xAxis="Place" yAxis="Sum of Placement" data={placementBarData} title="Placements for Last 20 Rounds"/>
    </div>


  );
}

export default HomePage;
