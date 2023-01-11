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