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

function getData () {
    var statsUrl = "https://www.balldontlie.io/api/v1/players?search=lebron"
    fetch(statsUrl)
    .then(function (response) {
        console.log("getData function works");
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log("data function works: ", data);
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





      // code to run functions and load page will remove hide class from player stat card and team 
      $("#player-input").submit(function (event) {
        $(".playerStatsCard").removeClass("hide");
        $(".teamStatsCard").removeClass("hide");
        event.preventDefault();
      })


