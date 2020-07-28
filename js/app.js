//var json = require('./data.json'); 
let oJSONTest = "";

fetch("https://raw.githubusercontent.com/ITBconsult/json-data/master/data.json")
  .then(response => response.json())
  .then(json => appendData(json));


  function appendData(data) {
    var mainContainer = document.getElementById("mainContainer");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = `Name: ${data[i].name} - City: ${data[i].city} - Color: ${data[i].color} - Age: ${data[i].age}`;
      mainContainer.appendChild(div);
    }
  }

 // testjson.forEach(element => console.log(element));