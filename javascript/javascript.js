//Navbar
function loadNavbar() {
  fetch("fragments/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;
    });
}

// Call the loadNavbar function when the page loads.
window.addEventListener("load", loadNavbar);

//Footer
function loadFooter() {
  fetch("fragments/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    });
}

// Call the loadFooter function when the page loads.
window.addEventListener("load", loadFooter);
