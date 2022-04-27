//Create a button and give it na ID of "hamburgerbtn"
//Attach an ID of "primaryNav" to the UL of the unordered list that holds your li
function toggleMenu() {
    document.getElementById("primarynav").classList.toggle("open");

}
const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;
