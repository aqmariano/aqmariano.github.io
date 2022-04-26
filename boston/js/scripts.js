//Create a button and give it na ID of "hamburgerbtn"
//Attach an ID of "primaryNav" to the UL of the unordered list that holds your li
const hb = document.querySelector('#hamburgerBtn');

hb.addEventListener('click', () => {
    document.querySelector('#primaryNav').classList.toggle('open')

});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
    speed: 2000,
  loop: true,
    autoplay: {delay: 5000,},
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});
