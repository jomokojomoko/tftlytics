const dotnev = require('dotenv')
const express = require('express');
const cors = require('cors');

const app = express();

dotnev.config()

app.use(cors());
app.use(express.json());

async function matchList() {
  var matches = await fetch('https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/NUWXdIrFiurYDsMUr_QGC6JcP_m24T-Hf80JMGw0bPxNFCXyG6k1Li8U9Aa0ReJv6eRABIg0r2v2TQ/ids?start=0&count=20&api_key=' + process.env.RIOT_KEY)
    .then(function (response) {
      return response.json()
    }).then(function (data) {
      return data
    }).catch(error => console.error('Error:', error));
  return matches
}

async function lastRounds(match) {
  return await fetch('https://americas.api.riotgames.com/tft/match/v1/matches/' + match + '?api_key=' + process.env.RIOT_KEY)
    .then(function (response) {
      return response.json()
    }).then(function (data) {

      var rank = []
      data.info.participants.forEach(element => {
        console.log(element)
        rank.push(element['last_round']);
      });
      return rank
    }).catch(error => console.error('Error:', error));
}

async function playersResults(match, puuid) {
  return await fetch('https://americas.api.riotgames.com/tft/match/v1/matches/' + match + '?api_key=' + process.env.RIOT_KEY)
    .then(function (response) {
      return response.json()
    }).then(function (data) {
      var player;
      data.info.participants.forEach(element => {
        if (element.puuid == puuid) {
          player = element;
        }
      });
      return player;
    }).catch(error => console.error('Error:', error));
}

app.get('/message', (req, res) => {
  console.log("hello")
  res.json({ message: "Hllo from server!" });
});

app.get('/riot', (req, res) => {
  fetch('https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/professorsack?api_key=' + "RGAPI-50ee2105-3a91-4d52-bcf0-c13b14cea21a")
    .then(function (response) {
      return response.json()
    }).then(function (data) {
      // console.log(data[0].data.answer);
      // return data[0].data.answer;
      console.log(data)
      res.json({ message: data.id });
    }).catch(error => console.error('Error:', error));


});

app.get('/matches', async (req, res) => {
  var matches = await matchList()
  var lastRoundList = [];
  console.log(matches)
  if (matches.status == undefined && matches != undefined) {
    for (const match of matches) {
      var lastRound = await lastRounds(match)
      lastRoundList.push(lastRound)
    }
    res.json({ LastRoundList: lastRoundList });
  }

});

app.get('/playerInfo', async (req, res) => {
  var matches = await matchList()
  var players=[];
  if (matches.status == undefined && matches != undefined) {
    for (const match of matches) {
      players.push(await playersResults(match,process.env.PLAYER_ID))
    }
    res.json({PlayerInfo:players});
  }
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});