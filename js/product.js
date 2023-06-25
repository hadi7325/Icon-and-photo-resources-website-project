//slider


$(document).ready(function () {

    // Go to the previous item


    $('#slider').owlCarousel({
        loop: false,
        autoplay: false,
        autoplayTimeout: 4000,
        rtl: true,
        dots: false,
        dotsEach: false,
        lazyLoad: true,
        mouseDrag: true,
        pullDrag: true,
        next_owl_carousel: 3000,
        slideBy:6,
        nav : true,

        responsive: {
            1200: {
                items: 6
            },
            992: {
                items: 5
            },
            768: {
                items: 5
            },
            567: {
                items: 3
            },
            0: {
                items: 2
            }

        }
    });
    var owl = $('#slider');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
        var owl = $('#slider');
        owl.owlCarousel();
    })


    function callback(event) {
        $('#slider').owlCarousel({
            onDragged: callback
        });
    }

    $('.inner .customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    $('.inner .customPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })


});


//navbar-postion
const navbarPositionProducts = document.querySelector(".position-products");
window.addEventListener("load",function(){
    if(this.window.innerWidth < 992){
        navbarPositionProducts.classList.add("hide")
    }else{
        navbarPositionProducts.classList.remove("hide")
    }
})

//filter setting


const btnShow = document.querySelectorAll(".btn-show");

btnShow.forEach(item => {
    item.addEventListener("click",function(){
        const dropmenu = item.parentElement.parentElement.querySelector(".drop-menu");
         dropmenu.classList.toggle("hide")
    })
})

//filter product

const tabFilterBtn = document.querySelectorAll(".tab-filter-btn");
const grouping = document.querySelectorAll(".grouping")
tabFilterBtn.forEach(btn => {
    btn.addEventListener("click",function(){
        for (let index = 0; index < tabFilterBtn.length; index++) {
            tabFilterBtn[index].classList.remove("active")
            
        }
        btn.classList.add("active")
         const btnAttr = btn.getAttribute("data-cat")
        grouping.forEach(group => {
            const groupAttr = group.getAttribute("current-cat");
            group.style.display = "none";
           
            if(btnAttr === groupAttr ){
                group.style.display = "block";
            }
            if(btnAttr === "all"){
                group.style.display = "block";
            }
        })

    })
})