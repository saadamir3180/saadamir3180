const aero = document.querySelector('.new-empty')
let homeNav = document.querySelector('.home-nav')
let body = document.querySelector('body')
let cursor = document.querySelector('.cursor')
const container = document.querySelector('.container')
const navTabs = document.querySelectorAll('.tab-nav')



const logo = document.querySelector(".logo")
var logoStyle = window.getComputedStyle(logo)
var logoAnimationValue = logoStyle.getPropertyValue('animation')

const navButtonsContainer = document.querySelector(".nav-btns")
var navButtonsStyle = window.getComputedStyle(navButtonsContainer)
var navButtonsAnimationValue = navButtonsStyle.getPropertyValue('animation')

const homeMainDiv = document.querySelector(".home")
var homeMainDivStyle = window.getComputedStyle(homeMainDiv)
var homeMainDivAnimationValue = homeMainDivStyle.getPropertyValue('animation')

const homeDetDiv = document.querySelector(".home-det")
var homeDetDivStyle = window.getComputedStyle(homeDetDiv)
var homeDetDivAnimationValue = homeMainDivStyle.getPropertyValue('animation')

const newNav = document.querySelector(".nav-btns-tab-container")
navButtonsContainer.addEventListener('click', ()=>{  
    const mediaQuery = window.matchMedia("(min-width: 780px)");
    if (!mediaQuery.matches) {
    navTabs.forEach((tab)=>{
        tab.addEventListener('click', ()=>{
            navButtonsContainer.setAttribute("aria-expanded", "true")
            newNav.style.display = "none"
        })
    })

    let ariaExpandedValue = navButtonsContainer.getAttribute("aria-expanded") 
    if (ariaExpandedValue === "true") {
        navButtonsContainer.setAttribute("aria-expanded", "false")
        newNav.style.display = "flex"
    } else {
        navButtonsContainer.setAttribute("aria-expanded", "true")
        newNav.style.display = "none"
    }
}
})

if (localStorage.getItem('hasBrowserLoadedBefore')) {
    logo.style.animation = 'none';
    navButtonsContainer.style.animation = 'none';
    homeMainDiv.style.animation = 'none';
    homeDetDiv.style.animation = 'none';
} else {
  container.style.animation = 'show-l 8s cubic-bezier(0.18, 0.98, 1, -0.11)'
  localStorage.setItem('hasBrowserLoadedBefore', true)
}
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "saadamir318@gmail.com",
        Password : "password",
        To : 'saadamir318@gmail.com',
        From : document.getElementById('email-input').value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}


let aeroPosY = 0;
let homeNavPosY = 0
window.addEventListener("scroll", (e)=> {
    
    const scrollPositionY = (document.body.scrollTop || document.documentElement.scrollTop);
    ((aeroPosY < scrollPositionY+(scrollPositionY/10) ? homeNavPosY = -4.5 : homeNavPosY = 0));
    aeroPosY = scrollPositionY+(scrollPositionY/10);
    homeNav.style.transform = "translateY(" + (homeNavPosY) + "rem)";
    let ariaExpandedValue = navButtonsContainer.getAttribute("aria-expanded")  
    
    if(ariaExpandedValue === "false") {
        navButtonsContainer.setAttribute("aria-expanded", "true")
        newNav.style.display = "none"
    }
})//?for scrollable effect
document.addEventListener('mousemove', (e)=>{
    const scrollPositionY = (document.documentElement.scrollTop || document.body.scrollTop);
    if(scrollPositionY>0){
    let y = e.clientY;
    ((y <= 70)? homeNavPosY = 0 : homeNavPosY = -4.5);
    homeNav.style.transform = "translateY(" + (homeNavPosY) + "rem)";
    }
})//!for nav bar




  
function hideElementOnSmallDevices() {
    const mediaQuery = window.matchMedia("(min-width: 780px)"); // Change the maximum width as needed

    if (mediaQuery.matches) {
        newNav.style.display = "none"; // Hide the element on small devices
    }
}

hideElementOnSmallDevices();

window.addEventListener("resize", hideElementOnSmallDevices);
