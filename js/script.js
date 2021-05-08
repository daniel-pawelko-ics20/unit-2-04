// Copyright (c) 2021 Daniel Pawelko All rights reserved
//
// Created by: Daniel Pawelko
// Created on: May 2021
// This file contains the JS functions for index.html


// Defining function that actives when user presses "Caculate" Button
function userInputClick() {
  // Get input from user and store it in const variable
  const width = parseInt(document.getElementById("widthEntered").value)
  const length = parseInt(document.getElementById("lengthEntered").value)

  // Making calculations
  const areaCalc = length*width
  const perimCalc = 2*(length+width)

  // Output calculations
  document.getElementById('Area').innerHTML = "Area is: " + length + " x " + width + " = " + areaCalc + " or " + areaCalc + "cm²"
  document.getElementById('Perimeter').innerHTML = "Perimeter is: " + "2 x (" + length + " + " + width + ") = " + perimCalc + " or " + perimCalc + "cm"
}