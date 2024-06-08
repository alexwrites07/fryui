
function toggleDarkMode() {
var footer = document.getElementById("site-footer"); 
footer.classList.toggle("dark-mode"); 

document.body.classList.toggle('dark-mode');
 var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
navbarLinks.forEach(function(link) {
 link.classList.toggle('text-muted');
});

}

