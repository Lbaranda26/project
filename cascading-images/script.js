const getLi = document.querySelectorAll(".classLI");

getLi.forEach((i, e) => { 
    getLi[e].addEventListener("click", () => {
        for(let i = 0; i < getLi.length; i++){
            getLi[i].style.flexBasis = "20%";
        }
        getLi[e].style.flexBasis = "100%";
    });          
})