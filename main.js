'use strict';
var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});
var request = require('request');

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=ZLBGGMT2RDNYGG02';

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      // console.log(data["Meta Data"]);
      // console.log(data);
      //var foo = myForm["foo[]"];



      var date = new Date();
  date = String(date);
  // console.log(date);
  // console.log(date.split(" "));
  var date = date.split(" ");
  var day = date [0];
  var year = date[3]
  var month = date[1];
  var dayOfMonth = String(parseInt(date[2])-1);
  if(dayOfMonth.length == 1){dayOfMonth = "0"+dayOfMonth};
  console.log(day + " " + year + " " + month + " " + dayOfMonth);
  var months = ["xxx", "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  for(let i = 0; i < months.length; i ++){
      if(month == months[i]){
          console.log(month+" is "+ i);
          month = String(i);
          if(month.length == 1){
              month = "0"+month;
              // console.log(month);
          }
      }
  }
  var date = year+"-"+month+"-"+dayOfMonth+" "+"08:35:00";
  console.log(date);
  // '2022-08-04 12:05:00';
  if(date == "2022-08-04 12:05:00"){console.log("Success!")};
  console.log(data['Time Series (5min)'][date]);
  console.log(data)
  // console.log(data['Meta Data']);
      }
});