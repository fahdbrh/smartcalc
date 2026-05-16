function calculateBMI(){

  const weight =
    document.getElementById(
      "weight"
    ).value;

  const height =
    document.getElementById(
      "height"
    ).value / 100;

  const result =
    document.getElementById(
      "result"
    );

  if(weight === "" ||
     height === ""){

    result.innerHTML =
      "Fill all fields";

    return;
  }

  const bmi =
    weight / (height * height);

  result.innerHTML =
    `Your BMI is
    ${bmi.toFixed(1)}`;

}