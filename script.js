const form = document.querySelector("form");

function sendEmail() {
  const fullName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const bodyMessage = `Full Name: ${fullName}<br> Email: ${email}<br> Phone Number: ${phone}<br> Message: ${message}<br>`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "eliasberhanu0@gmail.com",
    Password: "A7A447F4D41F9535AA7442FFA68A1EAED0B8",
    To: "eliasberhanu0@gmail.com",
    From: "eliasberhanu0@gmail.com",
    Subject: subject,
    Body: bodyMessage,
  }).then((message) => {
    if (message === "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const inputs = document.querySelectorAll(".item");
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.classList.add("error");
      input.parentElement.classList.add("error");
    } else {
      input.classList.remove("error");
      input.parentElement.classList.remove("error");
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  sendEmail();

  form.reset();
  return false;
});
