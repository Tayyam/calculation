//Button
function calculate() {
  //DOM
  var num = document.getElementById("num").value;
  num = parseInt(num);
  var num2 = document.getElementById("num2").value;
  num2 = parseInt(num2);

  var invesmentRate = document.getElementById("rate").value;
  invesmentRate = invesmentRate / 100 + 1;

  var amounfOfYears = document.getElementById("amounfOfYears").value;

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
  result = result.toLocaleString();
  document.getElementById("result").innerHTML = result;

  // table
  tbody.innerHTML = "";
  for (let i = 0; i < amounfOfYears; i++) {
    tbody = document.getElementById("tbody");
    tbody.innerHTML +=
     `
      <tr>
          <th scope="row">${[i + 1]}</th>
          <td>${array[i].toLocaleString()}</td>
      </tr>
     `;
  }
}
