const nameForm = document.querySelector("#name-form")
const welcomeContainer = document.querySelector("#welcome")
const logoutBtn = document.querySelector("#logout")

nameForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const nameInput = document.querySelector("#name")
    localStorage.setItem("nome", nameInput.value)

    nameInput.value = "";
    checkUser();
})
function checkUser() {
    const username = localStorage.getItem("nome")
    if(username){
         nameForm.style.display = "none";
         welcomeContainer.style.display = "block";
         const usernameElement = document.querySelector("#username")
         usernameElement.textContent = username;
    } else {
        nameForm.style.display = "block";
        welcomeContainer.style.display = "none";
    }
}
logoutBtn.addEventListener("click", () =>{
    localStorage.removeItem("nome")
    checkUser()
})
checkUser();
