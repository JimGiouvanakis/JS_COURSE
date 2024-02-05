// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = "23";

// if (x === 23) console.log(23);

// const calcAge = (birthYear) => 2037 - birthYear;

// console.log(calcAge(1998));

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// let min, max;
// function RemoveErrors(temp) {
//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i] === "error") {
//       temp.splice(i, 1);
//     }
//   }
//   return temp;
// }

// function MinMax(temp, min, max) {
//   max = Math.max(...temp);
//   min = Math.min(...temp);
//   return { min: min, max: max };
// }

// let checked = RemoveErrors(temperatures);
// let result = MinMax(checked, min, max);
// console.log(result.min, result.max);

// const measureKelvin = function () {
//   const measurment = {
//     type: "temp",
//     unit: `celsius`,
//     value: Number(prompt(`Degress celsius:`)),
//   };
//   console.table(measurment);

//   const kelvin = measurment.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

const MaxTemp = [17, 21, 23, 12, 5, -5, 0, 4];

function PrintForecast(MaxTemp) {
  let str = "";
  for (let i = 0; i < MaxTemp.length; i++) {
    str = str + `..${MaxTemp[i]}°C in ${i + 1} days`;
  }
  return str;
}

console.log(PrintForecast(MaxTemp));
