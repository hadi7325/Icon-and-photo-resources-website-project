
//acardion
console.log(10)
const questionBtn = document.querySelectorAll(".question");

questionBtn.forEach(btn => {
    btn.addEventListener("click",function(){
        btn.classList.toggle("active");
        let panel = btn.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.style.padding = 0 + "px";
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          panel.style.padding = 10 + "px";
        } 

    })
})