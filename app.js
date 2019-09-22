// from data.js
var tableData = data;
var tableData = d3.select("ufo-table");
tableData.attr("class", "table table-striped");

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(data);


data.forEach(function(alientrip) {
      console.log(alientrip);
      var row = tbody.append("tr");
      Object.entries(alientrip).forEach(function([key, value]) {
        console.log(key, value);
    //     // Append a cell to the row for each value
    //     // in the weather report object
        var cell = row.append("td");
        cell.text(value);
      });
    });



 
  // Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#input-field");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(people);

  var filteredData = people.filter(person => person.datetime === inputValue);

  console.log(filteredData);
});



function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
    var abc = 0;
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) == 0) {
          abc = 1;
        } else {
         // tr[i].style.display = "none";
        }
      } 
      td1 = tr[i].getElementsByTagName("td")[1];
      if (td1) {
        txtValue = td1.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) == 0) {
          abc = 1;
        } else {
          //tr[i].style.display = "none";
        }
      }
      if (abc == 1) {
          tr[i].style.display = "";
        }
        else
        {
        tr[i].style.display = "none";
        }
    }
  }