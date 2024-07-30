let contactForm = document.querySelector("#contactForm");
// If validation passes, display the success message
let successmsg = document.querySelector("#successMessage");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way
  successmsg.style.display = "block";
  // Clear the form fields
  contactForm.reset();
});
