document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const passwordField = document.getElementById("password");
  const password = passwordField.value;

  if (email === "shezan@.com" && password === "secret") {
    window.location = "bank.html";
  } else {
    // console.log("invalid user");
    alert("invalid user");
  }
});
