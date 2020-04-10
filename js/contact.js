document
  .getElementById("submit-button")
  .addEventListener("click", displayMessage);

function displayMessage() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

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
