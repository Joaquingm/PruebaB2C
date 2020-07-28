let oJSONTest = "";

createForm();

fetch("https://raw.githubusercontent.com/ITBconsult/json-data/master/data.json")
  .then(response => response.json())
  .then(json => appendData(json));


  function createForm() {
    let mainContainer = document.getElementById("mainContainer");
    let oForm = document.createElement("FORM");
    oForm.setAttribute("id", "dataForm");
    document.body.appendChild(oForm);
  
    let oTitle = document.createElement("H1");
    let oTitleText = document.createTextNode("Update Data Form");
    document.getElementById("formContainer").appendChild(oTitle);
    oTitle.appendChild(oTitleText);
  

    let oLabel = document.createElement("LABEL");
    let oText = document.createTextNode("Name : ");
    oLabel.setAttribute("for", "name");
    oLabel.appendChild(oText);
    document.getElementById("dataForm").insertBefore(oLabel, document.getElementById("name"));

    let oInput = document.createElement("INPUT");
    oInput.setAttribute("type", "text");
    oInput.setAttribute("value", "Insert name");
    document.getElementById("dataForm").appendChild(oInput);

    insertLineBreak(document.getElementById("dataForm"));
    insertLineBreak(document.getElementById("dataForm"));

    oLabel = document.createElement("LABEL");
    oText = document.createTextNode("City : ");
    oLabel.setAttribute("for", "city");
    oLabel.appendChild(oText);
    document.getElementById("dataForm").insertBefore(oLabel, document.getElementById("city"));

    oInput = document.createElement("INPUT");
    oInput.setAttribute("type", "text");
    oInput.setAttribute("value", "Insert city");
    document.getElementById("dataForm").appendChild(oInput);

    insertLineBreak(document.getElementById("dataForm"));
    insertLineBreak(document.getElementById("dataForm"));

    oLabel = document.createElement("LABEL");
    oText = document.createTextNode("Color : ");
    oLabel.setAttribute("for", "color");
    oLabel.appendChild(oText);
    document.getElementById("dataForm").insertBefore(oLabel, document.getElementById("color"));

    oInput = document.createElement("INPUT");
    oInput.setAttribute("type", "text");
    oInput.setAttribute("value", "Insert color");
    document.getElementById("dataForm").appendChild(oInput);

    insertLineBreak(document.getElementById("dataForm"));
    insertLineBreak(document.getElementById("dataForm"));

    oLabel = document.createElement("LABEL");
    oText = document.createTextNode("Age : ");
    oLabel.setAttribute("for", "age");
    oLabel.appendChild(oText);
    document.getElementById("dataForm").insertBefore(oLabel, document.getElementById("color"));

    oInput = document.createElement("INPUT");
    oInput.setAttribute("type", "text");
    oInput.setAttribute("value", "Insert age");
    document.getElementById("dataForm").appendChild(oInput);

    let oButton = document.createElement("BUTTON");
    let oButtonText = document.createTextNode("UPDATE");
    oButton.appendChild(oButtonText);
    document.body.appendChild(oButton);
    addEventListener("click", function(){alert("Record UPDATED")});

    insertLineBreak(document.getElementById("dataForm"));
    insertLineBreak(document.getElementById("dataForm"));

    


    

    

    
  }

  function appendData(data) {
    var mainContainer = document.getElementById("mainContainer");
    for (var i = 0; i < data.length; i++) {
      var oDiv = document.createElement("div");
      oDiv.innerHTML = `Name: ${data[i].name} - City: ${data[i].city} - Color: ${data[i].color} - Age: ${data[i].age}`;
      mainContainer.appendChild(oDiv);
    }
  }

  function insertLineBreak(container){
    var oBR = document.createElement('br');
    container.appendChild(oBR);
  }


 // testjson.forEach(element => console.log(element));