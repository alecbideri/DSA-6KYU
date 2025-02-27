function houseDescriptor([houseColor = "green", shutterColors = ["red"]]) {
  return `I have a ${houseColor} house with ${shutterColors.join(
    " and "
  )} shutters`;
}

console.log(houseDescriptor(["green"]));
// I have a green house with blue and white shutters
