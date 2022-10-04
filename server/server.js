// API - Alpha Vantage // https://www.alphavantage.co/documentation/
// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo
// Below code modified from documentation

let request = require('request');
let key = 'RSZVV5D6GXX5BHZO';
let api = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=' + key;


request.get({
    url: api,
    json: true,
    headers: {"User-Agent": "request"}
}, (err, res, data) => {
    if (err) {
        console.log("Error: ", err);
    } else if (res.statusCode !== 200) {
        console.log("Status: ", res.statusCode);
    } else {
        // data successfully parsed
        console.log(data);
    }
});