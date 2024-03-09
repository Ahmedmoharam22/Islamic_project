// let username = document.querySelector("#username");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let loginBtn = document.querySelector("#loginBtn");

let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value === "" || password.value === "") {
    alert("من فضلك ادخل البيانات");
  } else {
    if (getEmail === email.value && getPassword === password.value) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1200);
    } else {
      alert("الاسم او الباسورد خطأ");
      // username.value = "" && password.value = ""
    }
  }
});
// let logOutBtn = document.querySelector("#logOut");

// logOutBtn.addEventListener("click" , function() {
//     localStorage.clear();
//     setTimeout(() => {
//       window.location = "login.html";
//     }, 1500);
// })

// localStorage.clear();
// setTimeout(() => {
//   window.location = "login.html";
// }, 1500);
