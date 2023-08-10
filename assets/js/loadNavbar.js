document.addEventListener("DOMContentLoaded", function() {
    fetch('../../components/navbar.html') 
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
    });
});
