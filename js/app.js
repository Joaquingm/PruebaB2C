let oJSONTest = "";
let bOrder = false;

createForm();

fetch("https://raw.githubusercontent.com/ITBconsult/json-data/master/data.json")
  .then(response => response.json())
  .then(json => {
      appendData(json);
      oJSONTest = json;
});


  function createForm() {
    let mainContainer = document.getElementById("mainContainer");
    let oForm = document.createElement("FORM");
    oForm.setAttribute("id", "dataForm");
    document.body.appendChild(oForm);
  
    let oTitle = document.createElement("H1");
    let oTitleText = document.createTextNode("Update Data Form");
    document.getElementById("formContainer").appendChild(oTitle);
    oTitle.appendChild(oTitleText);

    createSortButtons();
    createFilterInputs();
    insertLineBreak(document.getElementById("mainContainer"));

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

    insertLineBreak(document.getElementById("dataForm"));

    let oButton = document.createElement("BUTTON");
    let oButtonText = document.createTextNode("UPDATE");
    oButton.appendChild(oButtonText);
    document.body.appendChild(oButton);
    oButton.addEventListener("click", function(){alert("Record UPDATED")});

    insertLineBreak(document.getElementById("dataForm")); 
  }

  function appendData(oData) {
    let mainContainer = document.getElementById("mainContainer");
    
    for (let i = 0; i < oData.length; i++) {
        let oDiv = document.createElement("div");
      oDiv.innerHTML = `Name: ${oData[i].name} - City: ${oData[i].city} - Color: ${oData[i].color} - Age: ${oData[i].age}`;
      mainContainer.appendChild(oDiv);
    }
  }

  function insertLineBreak(container){
    let oBR = document.createElement('br');
    container.appendChild(oBR);
  }

  function sortListByName(json){
      
    if(bOrder) {
        bOrder = false;
        oJSONTest.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }
    else {
        oJSONTest.sort((a, b) => (a.name < b.name) ? 1 : -1);
        bOrder = true;
    }

    let buttonContainer = document.getElementById("mainContainer")
    buttonContainer.innerHTML = "";
    
    printList(oJSONTest);
  }

  function sortListByCity(json){
    if(bOrder) {
        oJSONTest.sort((a, b) => (a.city > b.city) ? 1 : -1);
        bOrder = false;
    }
    
    else {
        oJSONTest.sort((a, b) => (a.city < b.city) ? 1 : -1);
        bOrder = true;
    }

    let mainContainer = document.getElementById("mainContainer").innerHTML = "";
    printList(oJSONTest);
  }

  function sortListByColor(json){
    if(bOrder) {
        oJSONTest.sort((a, b) => (a.color > b.color) ? 1 : -1);
        bOrder = false;
    }
    else {
        oJSONTest.sort((a, b) => (a.color < b.color) ? 1 : -1);
        bOrder = true;
    }

    let mainContainer = document.getElementById("mainContainer").innerHTML = "";
    printList(oJSONTest);
  }

  function sortListByAge(json){
    if(bOrder) {
        oJSONTest.sort((a, b) => (a.age > b.age) ? 1 : -1);
        bOrder = false;
    }
    else {
        oJSONTest.sort((a, b) => (a.age < b.age) ? 1 : -1);
        bOrder = true;
    }
    let mainContainer = document.getElementById("mainContainer").innerHTML = "";
    printList(oJSONTest);
  }

  function printList(){
    createSortButtons();
    for (let i = 0; i < oJSONTest.length; i++) {
        let oDiv = document.createElement("div");
      oDiv.innerHTML = `Name: ${oJSONTest[i].name} - City: ${oJSONTest[i].city} - Color: ${oJSONTest[i].color} - Age: ${oJSONTest[i].age}`;
      mainContainer.appendChild(oDiv);
    }
  }

  function createSortButtons(){
    let oDiv = document.createElement("div");
    oDiv.id = "sortButtonsContainer";
    mainContainer.appendChild(oDiv);


    let oButton = document.createElement("BUTTON");
    let oButtonText = document.createTextNode("Sort by name");
    oButton.appendChild(oButtonText);
    sortButtonsContainer.appendChild(oButton);
    oButton.addEventListener("click", sortListByName);
    
    oButton = document.createElement("BUTTON");
    oButtonText = document.createTextNode("Sort by city");
    oButton.appendChild(oButtonText);
    sortButtonsContainer.appendChild(oButton);
    oButton.addEventListener("click", sortListByCity);

    oButton = document.createElement("BUTTON");
    oButtonText = document.createTextNode("Sort by color");
    oButton.appendChild(oButtonText);
    sortButtonsContainer.appendChild(oButton);
    oButton.addEventListener("click", sortListByColor);

    oButton = document.createElement("BUTTON");
    oButtonText = document.createTextNode("Sort by age");
    oButton.appendChild(oButtonText);
    sortButtonsContainer.appendChild(oButton);
    oButton.addEventListener("click", sortListByAge);
    insertLineBreak(document.getElementById("mainContainer")); 

  }

  function createFilterInputs(){
    let oDiv = document.createElement("div");
    oDiv.id = "filterInputsContainer";
    mainContainer.appendChild(oDiv);

    let oLabel = document.createElement("LABEL");
    let oText = document.createTextNode("Name filter : ");
    oLabel.setAttribute("for", "name");
    oLabel.appendChild(oText);
    document.getElementById("filterInputsContainer").insertBefore(oLabel, document.getElementById("name"));

    let oInput = document.createElement("INPUT");
    oInput.setAttribute("type", "text");
    oInput.setAttribute("value", "Insert name");
    document.getElementById("filterInputsContainer").appendChild(oInput);

  }