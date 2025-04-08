function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

document.getElementById("contactButton").onclick = function() {
    document.getElementById("message").innerText = "This feature has not been implemented.";
};