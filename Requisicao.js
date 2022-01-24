const request = require('request');

URL = 'http://api.openweathermap.org/data/2.5/weather';
ID = 'daef2b6ebc1f80a11a194a397ce30583';
VAR_RES = '';
CIDADE = 'SAO PAULO';
COD_PAÍS = '';

const chamarAPIExterna = (callback) => {
    if(CIDADE === ""){
        console.log("O campo cidade está nulo!!!");
    }else{
        VAR_RES = URL + "?q=" + CIDADE + "&appid=" + ID;
    }
    request(VAR_RES, {json: true}, (err, res, body) => {
        if(err) {
            return callback(err);
        }
        return callback(body);
    });
}

module.exports.chamarAPI = chamarAPIExterna;