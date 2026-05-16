function calculateWater(){

  const weight =
    document.getElementById(
      "weight"
    ).value;

  const result =
    document.getElementById(
      "result"
    );

  if(weight === ""){

    result.innerHTML =
      "Enter your weight";

    return;
  }

  const water =
    (weight * 0.033).toFixed(1);

  result.innerHTML =
    `You need ${water}L daily`;

}