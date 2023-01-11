const signUpBtn = document.querySelector(".signup-btn");
const signInBtn = document.querySelector(".signin-btn");
const formsWrapper = document.querySelector(".forms-wrapper");

signUpBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    formsWrapper.classList.add("change");
});
signInBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    formsWrapper.classList.remove("change");
});