let key = document.getElementById("Buton");
key.addEventListener("click", function() {
    alert("Clicked, button.");
}, { once: true }):

let web = document.getElementById(webLink);

web.addEventListener("click", function(event) {
    event.preventDefault();



    alert("No distractions! I'm coding!");
});