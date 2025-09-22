const sendBtn = document.getElementById("send");
const contactForm = document.getElementById("form");
const formMessage = document.getElementById("messageform");

sendBtn.addEventListener("click", () => {
contactForm.reset();
formMessage.style.display = "block";
});