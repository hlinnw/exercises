// Remember, we're gonna use strict mode in all scripts now!
"use strict";
//challenge
function printForecast(arr) {
  let s = "";
  for (let i = 0; i < arr.length; i++) {
    s += `${arr[i]}c in ${i + 1}days...`;
  }
  console.log("..." + s);
}
const arrTest1 = [17, 21, 23];
const arrTest2 = [12, 5, -5, 0, 4];
console.log(printForecast(arrTest2));

/* section 60
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: Number(prompt("Degrees celsius:")), // prompt alwasy returns a string
    value: 10,
  };

  //   console.log(measurement);
  console.table(measurement); // easier to see the object
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

// using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  // debugger;
  //   let max = 0; //create a bug
  //   let min = 0; //create a bug

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") {
      continue;
    }
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
*/
