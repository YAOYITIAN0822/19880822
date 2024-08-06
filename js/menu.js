function toggleMenu() {
    var menu = document.getElementById("mobile_menu");
    var menuButton = document.getElementById("menu_button");
    var closeButton = document.getElementById("close_button");

    if (menu.style.right === "0px") {
        menu.style.right = "-250px";
    } else {
        menu.style.right = "0px";
    }
}
document.addEventListener("click", function(event) {
    var menu = document.getElementById("mobile_menu");
    var menuButton = document.getElementById("menu_button");
    var closeButton = document.getElementById("close_button");
    if (event.target !== menu && event.target !== menuButton && event.target !== closeButton && !menu.contains(event.target)) {
        menu.style.right = "-250px";
    }
});