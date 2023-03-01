// Where the cool stuff happens

// Change this if you need to
const previousWeatherToggle = document.querySelector(".show-previous-weather");

const previousWeather = document.querySelector(".previous-weather");

previousWeatherToggle.addEventListener("click", () => {
  previousWeather.classList.toggle("show-weather");
});

function getWeather() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
getWeather();
