// JavaScript (script.js)
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        if (email && password) {
            message.textContent = "Welcome to Blender Creators Community!";
            message.style.color = "green";
        } else {
            message.textContent = "Please fill out all required fields.";
            message.style.color = "red";
        }
    });
});
