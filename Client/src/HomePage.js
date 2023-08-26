import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BarChart } from './components/barChart';
import { Options, Data } from './utils/Data';
import { Key } from './utils/Keys';
import {useFetch} from 'react-async'



function HomePage() {
  const [barOptions, setBarOptions] = useState(Options);
  const [barData, setBarData] = useState(Data);
  const [matchList,setMatchList] = useState([]);
  function OnClick(){
  
      async function Matches(){
        await fetch('https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/NUWXdIrFiurYDsMUr_QGC6JcP_m24T-Hf80JMGw0bPxNFCXyG6k1Li8U9Aa0ReJv6eRABIg0r2v2TQ/ids?start=0&count=20&api_key='+Key)
        .then(function (response) {
          return response.json()
        }).then(function (data) {
          // console.log(data[0].data.answer);
          // return data[0].data.answer;
          return setMatchList(data);
        }).catch(error => console.error('Error:', error));
        console.log(matchList);
       await fetch('https://americas.api.riotgames.com/tft/match/v1/matches/'+matchList[0]+'?api_key='+Key)
        .then(function (response) {
          return response.json()
        }).then(function (data) {
          // console.log(data[0].data.answer);
          // return data[0].data.answer;
          var rank=[]
          data.info.participants.forEach(element => {
            rank.push(element['last_round']);
          });
          console.log(rank);
          setBarData(rank);
        }).catch(error => console.error('Error:', error));
      }
      
      Matches();
  }
  
  
  return (
    <div>
    <button onClick={OnClick}></button>
    <BarChart styleBar={{width: '45%', float:'left'}} options={barOptions} data={barData}/>
    <BarChart styleBar={{width: '45%', float:'left'}} options={barOptions} data={barData}/>
    <BarChart styleBar={{width: '45%', float:'left'}} options={barOptions} data={barData}/>
    <BarChart styleBar={{width: '45%', float:'left'}} options={barOptions} data={barData}/>
    </div>

  
  );
}

export default HomePage;
