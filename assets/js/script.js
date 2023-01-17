
$(function(){
    $('#player-input').parsley().on('field:validated',function(){
        var ok = $('.parsley-error'.length === 0);
    })
    
    .on('form:sumbit',function(){
        return false;
        
    })
});

var test1 = $('#autocomplete-input').parsley();
console.log(test1);

// Get player data based on input from text search box:
var playerName = "";
var playerID = "";



// Function retrieves player data which includes player ID needed to get stats
function getPlayerData (input) {
    var statsUrl = `https://www.balldontlie.io/api/v1/players?search=${input}`
    fetch(statsUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        playerID = data.data[0].id
        console.log(playerID);
        getSeasonAvg();

        var firstName = data.data[0].first_name;
        var lastName = data.data[0].last_name;

        localStorage.setItem('savedFirstName', JSON.stringify(firstName));
        localStorage.setItem('savedLastName', JSON.stringify(lastName));
       
    })
    }

// Function retrieves season average stats using the player ID retrieved from the getPlayerData function
function getSeasonAvg () {
    var seasonAvgUrl = "https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=" + playerID
    fetch(seasonAvgUrl)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        var seasonAvgPts = data.data[0].pts
        $("#tablePts").text(seasonAvgPts);
        var seasonAvgAst = data.data[0].ast 
        $("#tableAst").text(seasonAvgAst);
        var seasonAvgReb = data.data[0].reb
        $("#tableReb").text(seasonAvgReb);

        localStorage.setItem('savedPts', JSON.stringify(seasonAvgPts));
        localStorage.setItem('savedAsts', JSON.stringify(seasonAvgAst));
        localStorage.setItem('savedRebounds', JSON.stringify(seasonAvgReb));
        
    })
}

// Get team data based on input from dropdown select:

    function getTeams () {
        var statsUrl = `https://www.balldontlie.io/api/v1/teams`
        fetch(statsUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
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


searchBtnEl.addEventListener('click',()=> {
  // ui.clearPlayerCard();
  event.preventDefault();
  const currentValue = searchInput.value;

  getPlayerData(currentValue);
})

// DanB: creating a variable based on team input dropdown
var teamInputEl = document.querySelector('#team-input');
var userFormEl = document.querySelector('#team-form');


var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var teamname = teamInputEl.value.trim();
    console.log(teamname);
    if (teamname) {
      getTeamData(teamname);
  
    } else {
      alert('Please enter a valid NBA Team name');
    }
  };

const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0562083e3bmshd545a32cee16861p101696jsn6597d4607d1d',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

function getTeamData (team) {

    var teamURL = `https://api-nba-v1.p.rapidapi.com/teams?name=` + team;
    fetch(teamURL, options1)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        var teamLogoURL = data.response[0].logo

        var imageEl = document.createElement('img');
        imageEl.src = teamLogoURL;
        userFormEl.appendChild(imageEl);

    })
}

userFormEl.addEventListener('submit', formSubmitHandler);

// parse response from rapid api and locate logo url
// using logo url key
//      response: 0: logo: "url"
// send that value (the url) to a function that creates an html element that displays the image inside the team div

var savedFN = JSON.parse(localStorage.getItem('savedFirstName'));
var savedLN = JSON.parse(localStorage.getItem('savedLastName'));
var savedPts = JSON.parse(localStorage.getItem('savedPts'));
var savedAsts = JSON.parse(localStorage.getItem('savedAsts'));
var savedRebounds = JSON.parse(localStorage.getItem('savedRebounds'));

document.getElementById('searchedPlayer').innerHTML = savedFN + " " + savedLN;
document.getElementById('searchedPts').innerHTML = savedPts;
document.getElementById('searchedAsts').innerHTML = savedAsts;
document.getElementById('searchedRebounds').innerHTML = savedRebounds;