const firstlevelA = document.querySelectorAll(".firstlevel__a");
const firstlevelADropdown = document.querySelectorAll(".firstlevel__a_dropdown");
const firstlevelSymbol = document.querySelectorAll(".firstlevel__symbol");
const secondlevelUL = document.querySelectorAll(".secondlevel__ul");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const toggleMenu = document.querySelector(".toggle_menu");
const toggleMenuClose = document.querySelector(".toggle_menu_close");

const functionResetUl = () => {
    for(let i = 0; i < secondlevelUL.length; i++){
        firstlevelSymbol[i].innerHTML = "+";
        secondlevelUL[i].classList.add("hide");
        secondlevelUL[i].classList.remove("show");
    }
}
const functionNavShow = () => {
    nav.classList.remove("hide");
    nav.classList.add("show")
}
const functionNavHide = () => {
    nav.classList.add("hide");
    nav.classList.remove("show")
}

toggleMenu.addEventListener("click", () => {
    functionNavShow();
})
toggleMenuClose.addEventListener("click", () => {
    functionNavHide();
})

firstlevelADropdown.forEach((i, n) => {
    firstlevelADropdown[n].addEventListener("click", () => {
        functionResetUl();

        firstlevelSymbol[n].innerHTML = "-";
        secondlevelUL[n].classList.remove("hide");
        secondlevelUL[n].classList.add("show");
    })
})

document.addEventListener("click", (e) => {
    if (window.screen.width < 815){
        if(e.target === main || e.target === header){
            functionNavHide();
            functionResetUl();
        }
    }

    if (window.screen.width > 816){
        if(e.target === main || e.target === header){
            functionNavShow();
            functionResetUl();
        }
    }
})

if (window.screen.width > 816){
    functionNavShow();
    functionResetUl();
}