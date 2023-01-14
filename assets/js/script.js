// fetch('https://www.balldontlie.io/api/v1/teams', {
// //   // method: 'GET', //GET is the default.
// //   credentials: 'same-origin', // include, *same-origin, omit
// //   redirect: 'follow', // manual, *follow, error => follow: Automatically follow redirects. Unless otherwise stated the redirect mode is set to follow
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// Get player data based on input from text search box:
var playerName = "";
var playerID = "";

// Function retrieves player data which includes player ID needed to get stats
function getPlayerData (input) {
    var statsUrl = `https://www.balldontlie.io/api/v1/players?search=${input}`
    fetch(statsUrl)
    .then(function (response) {
        console.log("getPlayerData function works");
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log("data function works");
        console.log(data);
        playerID = data.data[0].id
        console.log(playerID);
        getSeasonAvg();
    })
    }

// Function retrieves season average stats using the player ID retrieved from the getPlayerData function
function getSeasonAvg () {
    var seasonAvgUrl = "https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=" + playerID
    fetch(seasonAvgUrl)
    .then(function (response){
        console.log("getSeasonAvg function works");
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log("data function works");
        console.log(data);
        var seasonAvgPts = data.data[0].pts
        console.log("Season Average Points: " + seasonAvgPts);
        $("#tablePts").text(seasonAvgPts);
        var seasonAvgAst = data.data[0].ast 
        console.log("Season Average Assists: " + seasonAvgAst);
        $("#tableAst").text(seasonAvgAst);
        var seasonAvgReb = data.data[0].reb
        console.log("Season Average Rebounds: " + seasonAvgReb);
        $("#tableReb").text(seasonAvgReb);
    })
}


// Get team data based on input from dropdown select:

    function getTeams () {
        var statsUrl = `https://www.balldontlie.io/api/v1/teams`
        fetch(statsUrl)
        .then(function (response) {
            console.log("getTeams function works");
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log("teams data function works");
            console.log(data);
        })
        }
        getTeams();

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0562083e3bmshd545a32cee16861p101696jsn6597d4607d1d',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

fetch('https://api-nba-v1.p.rapidapi.com/players?search=james', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    // team select form
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, options);
      });

      // Player Autocomplete 
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.autocomplete');
        var instances = M.Autocomplete.init(elems, options);
      });

const searchBtnEl = document.getElementById("search-btn");
const searchInput = document.getElementById("autocomplete-input");

    //   // code to run functions and load page will remove hide class from player stat card and team 
    //   $("#player-input").submit(function (event) {
    //     $(".playerStatsCard").removeClass("hide");
    //     $(".teamStatsCard").removeClass("hide");
    //     event.preventDefault();
    //   })


searchBtnEl.addEventListener('click',()=> {
  // ui.clearPlayerCard();
  event.preventDefault();
  const currentValue = searchInput.value;

  getPlayerData(currentValue);
  console.log("works");
  
  // ui.populatePlayerCard(data);

})

