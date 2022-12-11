//Button
//DOM

var num = document.getElementById("num").value;
num = parseInt(num);
var num2 = document.getElementById("num2").value;
num2 = parseInt(num2);

var invesmentRate = document.getElementById("rate").value;
invesmentRate = invesmentRate / 100 + 1;

var amounfOfYears = document.getElementById("amounfOfYears").value;

var today = new Date().getFullYear();

function calculate() {
  //DOM
  var num = document.getElementById("num").value;
  num = parseInt(num);
  var num2 = document.getElementById("num2").value;
  num2 = parseInt(num2);

  if (num < 0 || num > 1000000000) {
    // first number validation
    alert("Enter a valid number between 0 and 1,000,000,000");
  } else {
    if (num2 < 0 || num2 > 1000000000) {
      // second number validation
      alert("Enter a valid number between 0 and 1,000,000,000");
    } else {
      var invesmentRate = document.getElementById("rate").value;
      if (invesmentRate < 0 || invesmentRate > 100) {
        // rate validation
        alert("Enter a valid rate between 0 and 100");
      } else {
        invesmentRate = invesmentRate / 100 + 1;

        var amounfOfYears = document.getElementById("amounfOfYears").value;
        if (amounfOfYears < 0 || amounfOfYears > 100) {
          // years validation
          alert("Enter a valid number of years between 0 and 100");
        } else {
          var age = document.getElementById("age").value;
          age = parseInt(age);
          if (age < 18 || age > 65) {
            // age validation
            alert(
              "you must be between 18 and 65 years old to use this calculator"
            );
          } else {
            // here to write your math
            const array = [];

            for (var i = amounfOfYears - 1; i >= 0; i--) {
              var equation = invesmentRate ** [i];
              var invesmentyear = num * 12 * equation;
              var invesmentyear2 = num2 * 12 * (amounfOfYears - [i]) * equation;
              array.push(invesmentyear + invesmentyear2);
            }

            let sum = 0;
            for (let i = 0; i < array.length; i++) {
              sum += array[i];
            }

            result = sum;
            // the end of your math
            result = parseInt(result);

            // table
            tbody.innerHTML = "";
            for (let i = 0; i < amounfOfYears; i++) {
              tbody = document.getElementById("tbody");
              data = array[i];
              total = (data / result) * 100;
              tbody.innerHTML += `
      <tr>
          <th scope="row">${i + 1} / (${today + i}) / (${age + i}) </th>
          <td>${data.toLocaleString(undefined, {
            maximumFractionDigits: 0,
          })}</td>
          <td>${total.toLocaleString(undefined, {
            maximumFractionDigits: 1,
          })}%</td>
      </tr>
     `;
            }
            // end of table

            result = result.toLocaleString();
            document.getElementById("result").innerHTML = result;
          }
        }
      }
    }
  }
}
