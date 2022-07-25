let firstChal = new Date();
let todayDate = document.querySelector(" .date");
let todayTime = document.querySelector(" .time");
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "August",
  "Sep",
  "Nov",
  "Dec",
];
let month = months[firstChal.getMonth()];
let date = firstChal.getDate();
let hour = firstChal.getHours();
if (hour < 10) {
  hour = `0${hour} `;
}
let minute = firstChal.getMinutes();
if (minute < 10) {
  minute = `0${minute} `;
}
todayDate.innerHTML = `${month}  ${date}`;
todayTime.innerHTML = `${hour} : ${minute}`;

function displayWeatherCondition(response) {
  console.log(response);
  document.querySelector("#written-city").innerHTML = response.data.name; // выбираем линию где будет указываться город с поля ввода и сразу же говорим что там будет прописываться
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather").innerHTML =
    response.data.weather[0].description.toUpperCase();
}

function secondChal(event) {
  event.preventDefault();
  
  let ipiKey = "959764aef958aca1c60220a4c8d8110c";
  let city = document.querySelector("#cityLine").value; // выбираем поле ввода , что б город что мы ввели соединялся с АРІ
  let apiUrll = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=959764aef958aca1c60220a4c8d8110c&units=metric`;
  axios.get(apiUrll).then(displayWeatherCondition);
}

let subbmiting = document.querySelector("#enterCity");
subbmiting.addEventListener("submit", secondChal);
