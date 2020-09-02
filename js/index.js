// Your code goes here


// mouseenter on logo

const funBus = document.querySelector('.logo-heading')
    funBus.addEventListener('mouseenter', (event) => {
    event.target.style.color = "red";

    setTimeout(function() {
    event.target.style.color = "";
    }, 600);
    }, false);

// mouseover on links

const navLinks = document.querySelector('.nav')
    navLinks.addEventListener('mouseover', (event) => {
    event.target.style.color = "blue";

    setTimeout(function() {
    event.target.style.color = "";    
    }, 500);    
    }, false);

// click on Main Image

const imgChange = document.querySelector('.intro img')
    imgChange.addEventListener('click', (event) => {
    event.target.src = "https://images.unsplash.com/photo-1527058918112-6e17a8213943?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"    
})

// double-click on Main image

imgChange.addEventListener('dblclick', (event) => {
event.target.src = "https://images.unsplash.com/photo-1577459640575-219cbf231b8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1527&q=80";    
})

// Change background color  // "keydown"

let background = document.querySelector('body');

background.addEventListener('keydown', function(event){
event.target.style.backgroundColor = "orange";
})

// Change background color  // "keyup"

background.addEventListener('keyup', function(event){
    event.target.style.backgroundColor = "";
    })

// Change titles (h2) text  // "dblclick"

let changeTitles = document.querySelectorAll('h2');

changeTitles[0].addEventListener('dblclick', function(event){
event.target.textContent = "BUS TO HELL!!!";


setTimeout(function() {   // sets timelimit then resets 
    event.target.textContent = "Welcome To Fun Bus!";
  }, 900);
}, false);


changeTitles[1].addEventListener('dblclick', function(event){
event.target.textContent = "DO NOT GET ON THIS BUS!!!"
});

changeTitles[2].addEventListener('dblclick', function(event){
event.target.textContent = "THIS BUS IS CURSED!!!"
});

changeTitles[3].addEventListener('dblclick', function(event){
event.target.textContent = "YOU HAVE BEEN WARNED!!!"
});



// Change footer color...   // "mousedown"

let footerColor = document.querySelector('footer');

footerColor.addEventListener('mousedown', function(event){
event.target.style.backgroundColor = "red";

setTimeout(function() {
    event.target.style.backgroundColor = "";    
    }, 500);    
    }, false);


