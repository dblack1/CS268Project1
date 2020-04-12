let button = document.getElementById("submit-button");
let fnameInput = document.getElementById("fname");
let lnameInput = document.getElementById("lname");
let phoneInput = document.getElementById("phone");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("message");

button.addEventListener("click", displayMessage);
fnameInput.addEventListener("input", checkDisable);
lnameInput.addEventListener("input", checkDisable);
phoneInput.addEventListener("input", checkDisable);
emailInput.addEventListener("input", checkDisable);
messageInput.addEventListener("input", checkDisable);

let fname, lname, phone, email, message;

function displayMessage() {
  setValues();
  alert(
    "Thank you " +
      fname +
      " " +
      lname +
      ". We will reach out as soon as possible to you at " +
      phone +
      " or " +
      email
  );
}

function checkDisable() {
  setValues();
  if (fname && lname && phone && email && message) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

function setValues() {
  fname = fnameInput.value;
  lname = lnameInput.value;
  phone = phoneInput.value;
  email = emailInput.value;
  message = messageInput.value;
}
