// initialise weather obj
const weather = new Weather("Leeds", "uk");

// initialise UI obj
const ui = new UI();

// get the weather when DOM loads
document.addEventListener("DOMContentLoaded", getWeather);

// change location event
document.getElementById("change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  weather.changeLocation(city, country);

  // get weather and display UI again
  getWeather();

  // close model using jQuery
  $("#locModal").modal("hide");
});

// fetch weather function
function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.display(results);
    })
    .catch(err => console.log(err));
}
