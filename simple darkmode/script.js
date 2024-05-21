const toggleWrapper = document.querySelector(".toggle__wrapper");
const toggle = document.querySelector(".toggle");
const bodyPage = document.body;
const title = document.querySelector(".title");

let counter = "enable";

//SET THE MODE, DEPEND ON THE LOCALSTORAGE
if (localStorage.getItem("darkmode") === "enable"){
    toggleWrapper.classList.add("toggle__wrapper_darkmode");
    toggle.classList.add("toggle_darkmode");
    bodyPage.style.backgroundColor = "var(--dark-bg)";
    title.style.color = "var(--light-bg)";
    title.textContent = "Simple Dark Mode";
    //IF DARKMODE IS ENABLE, SET COUNTER TO EMPTY
    //SO WHEN YOU CLICK IF WILL READ THE COUNTER NOT EQUAL TO COUNTER !== ENABLE
    counter = "";
}

toggleWrapper.addEventListener("click", () => {

    //EVERY CLICK LOCALSTORAGE SET TO ENABLE
    localStorage.setItem("darkmode", "enable");
    localStorage.getItem("darkmode")

    //IF COUNTER ENABLE, DARKMODE WILL ENABLE
    if (counter === "enable"){

        toggleWrapper.classList.add("toggle__wrapper_darkmode");
        toggle.classList.add("toggle_darkmode");
        bodyPage.style.backgroundColor = "var(--dark-bg)";
        title.style.color = "var(--light-bg)";
        title.textContent = "Simple Dark Mode";

        //IF DARKMODE IS ENABLE, EMPTY THE COUNTER
        //SO NEXT CLICK IT WILL READ THE COUNTER !== ENABLE
        counter = "";
    }
    
    //ELSE IF COUNTER NOT EQUAL TO ENABLE, DARKMODE WILL DISABLE
    else if (counter !== "enable"){
        toggleWrapper.classList.remove("toggle__wrapper_darkmode");
        toggle.classList.remove("toggle_darkmode");
        bodyPage.style.backgroundColor = "var(--light-bg)";
        title.style.color = "var(--dark-bg)";
        title.textContent = "Simple Light Mode";

        localStorage.setItem("darkmode", "enable");

        //SET THE COUNTER BACK TO ENABLE
        //SO ONCE YOU CLICK AGAIN, IT WILL TRIGGER THE COUNTER === ENABLE
        counter = localStorage.getItem("darkmode");

        localStorage.removeItem("darkmode");
    }

});




