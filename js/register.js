let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let registerBtn = document.querySelector("#registerBtn")

registerBtn.addEventListener("click" , (e) => {
    e.preventDefault()
    if(username.value === "" || password.value === "" || email=== "") {
        alert("من فضلك ادخل البيانات")
    }else {
        localStorage.setItem("username" , username.value)
        localStorage.setItem("email" , email.value)
        localStorage.setItem("password" , password.value)
        setTimeout(() => {
            window.location = "login.html"
        } ,1200)
    }
})

// let logOutBtn = document.querySelector("#logOut");
// logOutBtn.addEventListener("click" , function() {
//     localStorage.clear();
//     setTimeout(() => {
//       window.location = "login.html";
//     }, 1500);
// })
