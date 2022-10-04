// API - Alpha Vantage // https://www.alphavantage.co/documentation/
// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo

let request = require('request');
let api = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=RSZVV5D6GXX5BHZO';


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