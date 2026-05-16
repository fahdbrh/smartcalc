function calculateAge(){

  const birthDate =
    document.getElementById(
      "birthDate"
    ).value;

  const result =
    document.getElementById(
      "result"
    );

  if(!birthDate){

    result.innerHTML =
      "Select your birth date";

    return;
  }

  const today =
    new Date();

  const birth =
    new Date(birthDate);

  let age =
    today.getFullYear() -
    birth.getFullYear();

  const month =
    today.getMonth() -
    birth.getMonth();

  if(
    month < 0 ||
    (
      month === 0 &&
      today.getDate() <
      birth.getDate()
    )
  ){
    age--;
  }

  result.innerHTML =
    `You are ${age} years old`;

}