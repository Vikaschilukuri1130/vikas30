// Simple script to show an alert when clicking on a project link
document.addEventListener("DOMContentLoaded", function() {
    let projectLinks = document.querySelectorAll(".project a");
    projectLinks.forEach(link => {
        link.addEventListener("click", function() {
            alert("You are leaving the portfolio to view the project on GitHub.");
        });
    });
});
