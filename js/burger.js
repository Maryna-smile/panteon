
let burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".nav-burger");
// let burgerBackground = document.querySelector(".nav-burger-wrapper");
console.log("hello");

burger.addEventListener('click', function(){
  burger.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  // burgerBackground.classList.toggle('active');
})