// tab filter

const tabBtn = document.querySelectorAll(".tab");
const keywordItem = document.querySelectorAll(".keyword-item");

tabBtn.forEach(item => {
    item.addEventListener("click", function () {
        for (let index = 0; index < tabBtn.length; index++) {
            tabBtn[index].classList.remove("active")

        }
        item.classList.add("active")
        const attr = item.getAttribute("data-status");
        filter(attr)
    })
})


function filter(attr) {
    keywordItem.forEach(element => {
        element.classList.add("hidden")

        element.parentElement.style.display = "none"
        const keywordStatus = element.getAttribute("data-value");
        if (keywordStatus === attr) {
            element.classList.add("active")
            element.classList.remove("hidden")
            element.parentElement.style.display = "block"

        } else if (attr === "all") {
            element.classList.add("active")
            element.classList.remove("hidden")
            element.parentElement.style.display = "block"


        }
    })
}


//select-box setting

const searchSelect = document.querySelector(".search-select");
const dropMenu = document.querySelector(".drop-menu");

searchSelect.addEventListener("click", function () {
    dropMenu.classList.toggle("active");
    searchSelect.classList.toggle("active");

})

const optionItem = document.querySelectorAll(".option");
const defaultValue = document.querySelector(".default");
let optionValue = document.querySelector(".value")
optionItem.forEach(item => {
    item.addEventListener("click", function () {
        
        const innerValue = item.innerHTML;
        const currenyValue = item.getAttribute("data-value");
        defaultValue.innerHTML = innerValue;
        optionValue.value = currenyValue;
    })
})

