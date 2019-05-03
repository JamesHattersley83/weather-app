// create weather class
class Weather {
  constructor(city, country) {
    this.apiKey = "726003673e20d47d73ff21749e26e0e9";
    this.city = city;
    this.country = country;
  }

  // fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&APPID=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
