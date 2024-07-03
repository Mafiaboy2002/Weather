
const options = {
	method: 'GET',
	headers: {
		// 'X-RapidAPI-Key': 'f3ea694aa3mshef5cdf1c81c6208p18692djsn8107cc9fa286',
		// 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		'X-RapidAPI-Key': 'b17c9cfda4msh4624970fdfbb2e3p1ebdf2jsndd26d2b6c36f',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};
const getWeather = (city)=>{

 cityName.innerHTML = city
 // /city/landon/EN
	// weather?city='+city
fetch('https://open-weather13.p.rapidapi.com/v1/city/landon/EN , options)
 .then(response => response.json())
 .then(response => {
	
	
	console.log(response)
	cloud_pct.innerHTML = response.cloud_pct
	temp.innerHTML = response.temp
	feels_like.innerHTML = response.feels_like
	humidity.innerHTML = response.humidity
	min_temp.innerHTML = response.min_temp
	max_temp.innerHTML = response.max_temp
	wind_speed.innerHTML = response.wind_speed
	wind_degrees.innerHTML = response.wind_degrees
	
})
 .catch(err => console.error(err));
}
submit.addEventListener("click" , (e)=>{
	e.preventDefault()
getWeather(city.value)
})

getWeather("Delhi")


