//navbar position

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (this.scrollY > navbar.clientHeight) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
})
const searchBox = document.querySelector(".nav-search-box");
const resultPage = document.querySelector(".result-page")

searchBox.addEventListener("click", function () {
    resultPage.classList.toggle("active")
    if (resultPage.classList.contains("active")) {
        resultPage.style.opacity = 1;
        resultPage.style.visibility = "visible";
    } else {
        resultPage.style.opacity = 0;
        resultPage.style.visibility = "hidden";

    }
})



document.body.addEventListener("click", function(event){

    if (!event.target.closest(".nav-search-box")){
        resultPage.style.opacity = 0;
        resultPage.style.visibility = "hidden";
    }
});


//navbar responsive

const overlay = document.querySelector(".overlay");
const menuBtn = document.querySelector(".resposive-menu-btn");
const responsiveMenu = document.querySelector(".responsive-links");
const closeBtn = document.querySelector(".close-btn")
menuBtn.addEventListener("click", function () {
    responsiveMenu.classList.add("active")
    overlay.classList.add("active")
})
overlay.addEventListener("click", function () {
    overlay.classList.remove("active");
    responsiveMenu.classList.remove("active");


})
closeBtn.addEventListener("click", function () {
    overlay.classList.remove("active");
    responsiveMenu.classList.remove("active");


})
