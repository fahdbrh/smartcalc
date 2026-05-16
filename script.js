// BMI

function calculateBMI(){

  const weight =
    document.getElementById("weight").value;

  const height =
    document.getElementById("height").value / 100;

  const result =
    document.getElementById("bmiResult");

  if(weight === "" || height === ""){
    result.innerHTML = "Fill all fields";
    return;
  }

  const bmi =
    weight / (height * height);

  result.innerHTML =
    `Your BMI is ${bmi.toFixed(1)}`;

}

// AGE

function calculateAge(){

  const birthDate =
    document.getElementById("birthDate").value;

  const result =
    document.getElementById("ageResult");

  if(!birthDate){
    result.innerHTML = "Select a date";
    return;
  }

  const today = new Date();

  const birth = new Date(birthDate);

  let age =
    today.getFullYear() -
    birth.getFullYear();

  const month =
    today.getMonth() -
    birth.getMonth();

  if(
    month < 0 ||
    (month === 0 &&
    today.getDate() < birth.getDate())
  ){
    age--;
  }

  result.innerHTML =
    `You are ${age} years old`;

}
function calculateWater(){

  const weight =
    document.getElementById(
      "waterWeight"
    ).value;

  const result =
    document.getElementById(
      "waterResult"
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