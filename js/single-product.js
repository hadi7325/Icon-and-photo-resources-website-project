
//drop-menu
const btnMore = document.querySelector(".btn-more");
const btnMoreList = document.querySelector(".btn-more-list");
 
btnMore.addEventListener("click", function () {
    btnMoreList.classList.toggle("active")
    if (btnMoreList.classList.contains("active")) {
        btnMoreList.style.opacity = 1;
        btnMoreList.style.visibility = "visible";
    } else {
        btnMoreList.style.opacity = 0;
        btnMoreList.style.visibility = "hidden";

    }
})



document.body.addEventListener("click", function(event){

    if (!event.target.closest(".btn-more")){
        btnMoreList.style.opacity = 0;
        btnMoreList.style.visibility = "hidden";
    }
});

