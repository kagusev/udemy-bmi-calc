// This is pretty much basic web application as the calculation is happening not itn the browser but on 
// back end side - on the server and hidden from plain view.


const express = require("express");   // require express server 
const bodyParser = require("body-parser");


const app = express();                // sertting new app using expres module
//mandatory code for use body-parser 
app.use(bodyParser.urlencoded({ extended: true }));

//body-parser.urlencoded  is need for parsing "HTTP request that we get" and getting access to form data

// app.get("/about", (request, response) => response.sendFile(__dirname.replace(/\\/g, "/") + "/about.html"));
//  app.get("/contact", (request, response) => response.sendFile(__dirname.replace(/\\/g, "/") + "/contact.html"));


app.get("/", (request, response) => response.sendFile(__dirname.replace(/\\/g, "/") + "/index.html"));
app.post("/", function (req, res) {
    console.log(req.body.num1); // this is how you grab data from from - thanks to body-parser

    // now lets make a calculating fuction:
    var num1 = Number(req.body.num1);  // otherwise - it's getting parces as text!!!
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send(`The resulf of addition is  ${result}`);

});

//GET and POST for each rout
app.get("/bmicalculator", (request, response) => response.sendFile(__dirname.replace(/\\/g, "/") + "/bmiCalculator.html"));
app.post("/bmicalculator", function (req, res) {
    var metricWeight = Number(req.body.metricWeight);
    var metricHeight = Number(req.body.metricHeight);
    var bmi = metricWeight / Math.pow(metricHeight, 2);
    bmi = bmi.toFixed(2);

    console.log(isNaN({ bmi }));  //just checking if bmi's type is number

    res.send(`Your Body Mass Index is  ${bmi}`);

});



// spin up server , 3k - commonly used port for developing locally
app.listen(3000, () => console.log("Server started on port 3000")); 