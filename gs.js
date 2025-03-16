// sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
const sheetId = "1DZ5883dJhCZxEBYMOM-xh-jYeOKYTJZr1ITbvsnKCDE";
// sheetName is the name of the TAB in your spreadsheet (default is "Sheet1")
const sheetName = encodeURIComponent("Sheet1");
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

$.ajax({
  type: "GET",
  url: sheetURL,
  dataType: "text",
  success: function (response) {
    // var data = $.csv.toArrays(response);
    var data = $.csv.toObjects(response);
    console.log(data);
    var result = $.grep(data, function(e){ return e.id == "123456"; });
    alert(data.find(x => x.id === '123456').link);
    //alert(result);
    // 'data' is an Array of Objects
    // ADD YOUR CODE HERE
  },
});
