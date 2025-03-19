function getList() {

var select = document.getElementById('statorList');

// sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
  const sheetId = "1EO4ZLLGprrDiyFLf9CYIPy85s0DzcZUpkiIGNirbfoY";
// sheetName is the name of the TAB in your spreadsheet
const sheetName = encodeURIComponent("list");
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

fetch(sheetURL)
  .then((response) => response.text())
  .then((csvText) => handleResponse(csvText));

function handleResponse(csvText) {
  let sheetObjects = csvToObjects(csvText);
  populateSelect();
  // sheetObjects is now an Array of Objects
  //console.log(sheetObjects);
  
  // ADD CODE HERE
}

function csvToObjects(csv) {
  const csvRows = csv.split("\n");
  const propertyNames = csvSplit(csvRows[0]);
  let objects = [];
  for (let i = 1, max = csvRows.length; i < max; i++) {
    let thisObject = {};
    let row = csvSplit(csvRows[i]);
    for (let j = 0, max = row.length; j < max; j++) {
      thisObject[propertyNames[j]] = row[j];
      // BELOW 4 LINES WILL CONVERT DATES IN THE "ENROLLED" COLUMN TO JS DATE OBJECTS
      // if (propertyNames[j] === "Enrolled") {
      //   thisObject[propertyNames[j]] = new Date(row[j]);
      // } else {
      //   thisObject[propertyNames[j]] = row[j];
      // }
    }
    objects.push(thisObject);
  }
  return objects;
}

function csvSplit(row) {
  return row.split(",").map((val) => val.substring(1, val.length - 1));
}



function populateSelect() {
  for (var i = 0; i < sheetObjects.length; i++) {
    select.innerHTML = select.innerHTML +
    '<option value=' + sheetObjects[i].pn + '>' + sheetObjects[i].name + ' ' + sheetObjects[i].pn + '</option>';
  }
}
  

} 
