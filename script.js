const menu = document.getElementById("menu");
const links = document.querySelector(".links");

menu.onclick = () => {
    links.classList.toggle("active");
};
