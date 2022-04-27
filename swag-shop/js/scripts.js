//Create a button and give it na ID of "hamburgerbtn"
//Attach an ID of "primaryNav" to the UL of the unordered list that holds your li
const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');

hb.addEventListener('click', () => {
   pw.classList.toggle('moveOver');

});
