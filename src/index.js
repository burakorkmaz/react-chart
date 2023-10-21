import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"


ReactDOM.render(
  <App />,
  document.getElementById("root")
);


var e = document.getElementsByClassName("highcharts-series-1")[0];
var child = e.lastElementChild;  
while (child) { 
    e.removeChild(child); 
    child = e.lastElementChild; 
} 

var b = document.getElementsByClassName("highcharts-series-2")[0];
var child2 = b.lastElementChild;  
while (child2) { 
    b.removeChild(child2); 
    child2 = b.lastElementChild; 
} 
