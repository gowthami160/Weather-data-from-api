const loadWeather = () => {
  const getInput = document.getElementById("input-field");
  const getInputValue = getInput.value;

  //   const myApi = "02a0fd0aa84066bebf4972c8da7a9c5e";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${getInputValue}&appid=02a0fd0aa84066bebf4972c8da7a9c5e`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));

  document.getElementById("input-field").value = "";
};

const displayData = (data) => {
  console.log(data);
  const { feels_like } = data.main;

  const { id, main } = data.weather[0];
  const { icon } = data.weather[0];

  let getTemp = document.getElementById("temparature");
  const getCountryName = document.getElementById("country");
  const weather = document.getElementById("weather");

  const imgUrl = `http://openweathermap.org/img/w/${icon}.png`;

  let imgLInk = document.getElementById("img").src;
  document.getElementById("img").src = imgUrl;
  console.log(imgLInk);

  getCountryName.innerText = data.name;
  let getTempValue = Math.round(feels_like - 273);
  getTemp.innerText = getTempValue;
  weather.innerText = main;
};