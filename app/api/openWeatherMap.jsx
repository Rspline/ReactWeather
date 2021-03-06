var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=c15e5a2933ac7703d970f632e3118b64';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&units=imperial`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp
      }
    }, function (res) {
      throw new Error(res.data.message);
    });

    }
}
