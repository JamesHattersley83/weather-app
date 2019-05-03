// initialise weather obj
const weather = new Weather("London", "uk");

// get the weather when DOM loads
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}
