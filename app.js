// initialise weather obj
const weather = new Weather("Leeds", "uk");

// initialise UI obj
const ui = new UI();

// get the weather when DOM loads
document.addEventListener("DOMContentLoaded", getWeather);

// fetch weather function
function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.display(results);
    })
    .catch(err => console.log(err));
}
