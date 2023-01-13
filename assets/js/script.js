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

function getData (input) {
    var statsUrl = `https://www.balldontlie.io/api/v1/players?search=${input}`
    fetch(statsUrl)
    .then(function (response) {
        console.log("getData function works");
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log("data function works");
        console.log(data);
    })
    }
    getData();

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

class UI {
  constructor(){
    this.playerCardEl = document.getElementById("player-card");
  }

  populatePlayerCard(data, playerName) {
    this.playerCardEl.innerHTML = `
      <div class = "player">
        <h3 class="player-name">${playerName}</h3>
        <h5 class="player-info"> Height: ${data.height_feet}'${data.height_inches} inches</h5>
        <h5 class="player-info"> Position: ${data.position}</h5>
        <h5 class="player-info"> Team: ${data[0].team.full_name}</h5>
      </div>
    `
  }

  // clearPlayerCard(){
  //   this.playerCardEl.innerHTML = "";
  // }
}

const ui = new UI;

searchBtnEl.addEventListener('click',()=> {
  // ui.clearPlayerCard();
  const currentValue = searchInput.value;

  getData(currentValue);
  console.log("works");

  ui.populatePlayerCard();

})