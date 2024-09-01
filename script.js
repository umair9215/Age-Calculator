function claculateAge() {
  const birthdate = new Date(document.getElementById("birthdate").value);
  const today = new Date();

  let age = today.getFullYear() - birthdate.getFullYear();
 

  const result = document.getElementById("output");
  if (birthdate > today) {
    result.textContent = "Please select a valid birthdate.";
  } else if (isNaN(age)) {
    result.textContent = "Please enter your birthdate.";
  } else {
    result.textContent = `You are ${age} years old.`;
  }
}

function reset() {
  const result = document.getElementById("output");
  result.innerHTML = "";
}
