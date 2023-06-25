

//main filter account setting

const accountItem = document.querySelectorAll(".account-item");
const tabAccountBtn = document.querySelectorAll(".tab-account-btn");

tabAccountBtn.forEach(btn => {
    btn.addEventListener("click", function () {

        for (let index = 0; index < tabAccountBtn.length; index++) {
            const element = tabAccountBtn[index];
            element.classList.remove("active")

        }
        btn.classList.add("active")




        accountItem.forEach(item => {
            item.style.display = "none";
            const itemAttr = item.getAttribute("data-status");
            const btnAttr = btn.getAttribute("data-btn");

            if (btnAttr === itemAttr) {
                item.style.display = "block";
            } else {
                item.style.display = "none";

            }
        })
    })
})


//account-details setting

//change picture
const editBtn = document.querySelector(".edit");
const inputFile = document.querySelector(".file");
editBtn.addEventListener("click", function () {
    inputFile.click();
})

//change name & last-name

const firstName = document.querySelector(".name");
const lastName = document.querySelector(".last-name");
const chaneBtn = document.querySelector(".btn-change");
const changeMessage = document.querySelector(".change-message");
const closeBtnMessage = document.querySelector(".change-message .close")
let firstNameValue;
let lastNameValue;
let defaultFirstName = firstName.value;
let defaultLastName = lastName.value;
console.log(defaultLastName,defaultFirstName)
firstName.addEventListener("change", function (e) {
    firstNameValue = e.target.value;

})
lastName.addEventListener("change", function (e) {
    lastNameValue = e.target.value;

})

chaneBtn.addEventListener("click", function () {
   

    console.log(firstName.value,lastName.value)


    if (firstNameValue == undefined) {
        firstName.value = defaultFirstName;
        
    }else if(lastNameValue == undefined) {
        
        lastName.value = defaultLastName;
    }else{
        firstName.value = firstNameValue;
        lastName.value = lastNameValue;
        changeMessage.style.opacity = 1;
        changeMessage.style.visibility = "visible";

    }

    let timer = setTimeout(() => {
        changeMessage.style.opacity = 0;
        changeMessage.style.visibility = "hidden";
    }, 5000)
    closeBtnMessage.addEventListener("click", function () {
        clearTimeout(timer)
        changeMessage.style.opacity = 0;
        changeMessage.style.visibility = "hidden";
    })
})


//change password

//show popup
const changePassBtn = document.querySelector(".change-pass");
const changePasPopup = document.querySelector(".change-pass-popup");
const overlayPopup = document.querySelector(".overlay");
const closePopupBrn = document.querySelector("#close-popup");

changePassBtn.addEventListener("click", function () {
    changePasPopup.classList.add("active");
    overlayPopup.classList.add("active")
})

overlayPopup.addEventListener("click", function () {

    changePasPopup.classList.remove("active");
})

closePopupBrn.addEventListener("click", function () {
    changePasPopup.classList.remove("active");
    overlayPopup.classList.remove("active")
})



//validation

const formPopup = document.querySelector(".form-popup")
const passDefault = document.querySelector(".pass-default")
const passNew = document.querySelector(".pass-new")
const passNewRepeat = document.querySelector(".pass-new-repeat")
formPopup.addEventListener("submit", function (e) {
    e.preventDefault()
    check();
})

function check() {

    const passDefaultValue = passDefault.value.trim();
    const passNewValue = passNew.value.trim()
    const passNewRepeatValue = passNewRepeat.value.trim()


    if (passDefaultValue === "") {
        error(passDefault, ' مقدار پسوورد خالی است پسووردی وارد کتید.')
    } else {
        done()
    }

    if (passNewValue === "") {
        error(passNew, 'مقدار پسوورد جدید خالی است پسووردی وارد کتید.')
    } else {
        done()
    }

    if (passNewRepeatValue === "") {
        error(passNewRepeat, 'مقدار پسوورد خالی جدید است پسووردی وارد کتید.')
    } else if (passNewRepeatValue !== passNewValue) {
        error(passNewRepeat, 'پسوورد ها هم خوانی ندارند')
    } else {
        done()
    }

}


const errorMessage = document.querySelector(".error-message");
const errorMessageClose = document.querySelector(".error-message .close");
function error(input, massage) {
    const errorMessageText = document.querySelector(".error-message p");
    errorMessage.classList.add("error")
    errorMessage.classList.remove("done")
    errorMessageText.textContent = massage;
    
}
errorMessageClose.addEventListener("click",function(){
    errorMessage.classList.remove("error")
    errorMessage.classList.add("done")
})

function done() {
    errorMessage.classList.remove("error")
    errorMessage.classList.add("done")
}


//download section filter setting

const filterBtn = document.querySelectorAll(".filter-btn-download");
const downloadItem = document.querySelectorAll(".download-item");
console.log(filterBtn)
filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
     
        for (let index = 0; index < filterBtn.length; index++) {
            const element = filterBtn[index];
            element.classList.remove("active")

        }
        btn.classList.add("active")




        downloadItem.forEach(item => {
            item.style.display = "none";
            const itemDownloadAttr = item.getAttribute("data-item");
            const btnDownloadAttr = btn.getAttribute("value");

            if (btnDownloadAttr === itemDownloadAttr) {
                item.style.display = "block";
            } else {
                item.style.display = "none";

            }
        })
    })
})


//collection section filter setting

const filterBtnCollection = document.querySelectorAll(".filter-btn-collection");
const downloadItemCollection = document.querySelectorAll(".download-item-collection");
console.log(filterBtn)
filterBtnCollection.forEach(btn => {
    btn.addEventListener("click", function () {
     
        for (let index = 0; index < filterBtnCollection.length; index++) {
            const element = filterBtnCollection[index];
            element.classList.remove("active")

        }
        btn.classList.add("active")




        downloadItemCollection.forEach(item => {
            item.style.display = "none";
            const itemDownloadCollectionAttr = item.getAttribute("data-item");
            const btnDownloadCollectionAttr = btn.getAttribute("value");

            if (btnDownloadCollectionAttr === itemDownloadCollectionAttr) {
                item.style.display = "block";
            } else {
                item.style.display = "none";

            }
        })
    })
})




