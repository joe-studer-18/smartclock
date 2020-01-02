let request = require('request')

const WAIT_TIME = 10000; // 10 seconds
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  startTime();
  let apiKey = '859abd2dd67487dd1756a24e8d573759';
  let city = 'Branson'; 
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' 
          + city + '&appid=' + apiKey + '&units=imperial';

  request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      let weather = JSON.parse(body);
      let weatherString = city + ': ' + weather.main.temp + '°';
      document.getElementById('weather').innerHTML = weatherString;
    }
  });

  function startTime() {
    let today = new Date();
    let aOrP = today.getHours() / 12 < 1 ? "a" : "p";
    let h = today.getHours() % 12;
    if (h == 0) {h = 12};
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('digital-time').innerHTML = h + ":" + m + aOrP;
    let t = setTimeout(startTime, WAIT_TIME);
  }
  
  function checkTime(m) {
    if (m < 10) {m = "0" + m};  // add zero in front of numbers < 10
    return m;
  }
})

BrowserWindow.setFullScreen(true);
