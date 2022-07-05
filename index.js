var container = document.querySelector('.container');
var place = document.querySelector('.place');
var submit = document.querySelector('.submit');
var btn = document.querySelector('#btn');
var Name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var weather = document.querySelector('.weather')


btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + place.value + '&appid=6c91e0440da54718bd2877d1c9fc377e')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var latValue = data['coord']['lat'];
            var longValue = data['coord']['lon'];
            var weatherValue = data['weather'][0]['description'];
            Name.innerHTML = `Name is : ${nameValue}`
            desc.innerHTML = `The Latitude Is : ${latValue}°`
            temp.innerHTML = `The Longitude Is : ${longValue}°`
            weather.innerHTML = `The Current Weather is : ${weatherValue}`

        })
        .catch(err => alert('wrong city entered'))


})