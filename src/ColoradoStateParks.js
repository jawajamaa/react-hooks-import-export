import React from "react";
import howManyParks from "./parks/howManyParks";
import * as RMFunctions from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

console.log(RMFunctions.trees);

RMFunctions.wildlife();

RMFunctions.elevation();

export default ColoradoStateParks
