// FOR MENU DISPLAY NONE AND BLOCK

function onLoad() {
    let nav3 = document.getElementById("nav3");
    let nav2 = document.getElementById("nav2");
    let menuLine = document.getElementsByClassName("ri-menu-line")[0];

    menuLine.addEventListener("click", () => {
        nav2.classList.toggle("active");
        menuLine.classList.toggle("ri-menu-line");
        menuLine.classList.toggle("ri-close-line");
    })
}

onLoad();


