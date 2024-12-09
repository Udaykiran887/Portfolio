const roles = ["Student", "Web Developer", "Python Developer"];
let index = 0;
const textElement = document.getElementById("changing-text");

function changeRole() {
    index = (index + 1) % roles.length; // Rotate through the roles
    textElement.textContent = roles[index]; // Update the text
}

setInterval(changeRole, 2000); // Change every 2 seconds
