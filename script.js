const nav = document.getElementById("navigation");
function toggleNav() {
    if (nav.classList.contains("fa-bars")) {
        nav.classList.remove("fa-bars");
        nav.classList.add("fa-times");
        navmenu.style.right = "0";
    } else if (nav.classList.contains("fa-times")) {
        nav.classList.remove("fa-times");
        nav.classList.add("fa-bars");
        navmenu.style.right = "-100px";
    } else {
        console.log(" At Header in nav Cross and Menu Icon Eror")
    }
}