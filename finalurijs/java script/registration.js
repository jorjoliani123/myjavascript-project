


let formElement = document.getElementById("registration");

formElement.addEventListener("submit", function (y) {
  y.preventDefault();

  let errors = {};
  let form = y.target;


  let username = document.getElementById("username").value;
  if (username.length < 5 && username == "") {
    errors.usernameValue =
      "Username value must be more then 5 characters and can not be empty";
  }

 

  
  let password = document.getElementById("passw").value;
  let password2 = document.getElementById("passw2").value;

  if (password.length < 5 && password == "") {
    errors.password = "Password value must be more then 5 symbols";
  }

  if (password != password2) {
    errors.password2 = "Passwords do not match";
  }

 
  let agree = document.getElementById("agree").checked;
  if (!agree) {
    errors.agree = "You must agree our conditions";
  }

  
  let gender = false;

  form.querySelectorAll('[name = "gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Select Your Gender";
  }

  console.log(errors);

  form.querySelectorAll(".error-text").forEach((element) => {
    element.innerHTML = "";
  });

  for (let item in errors) {
    console.log(item); 

    let TextError = document.getElementById("error_" + item);

   

    if (TextError) {
      TextError.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});


let errors = {
  usernameValue:
    "Username value must be more then 5 characters and can not be empty",
  gender: "Select Your Gender",
  agree: "You must agree our conditions",
  password2: "Passwords do not match",
};


let passwordShow = document.getElementById("showhide");
let icon = document.getElementById("toggleIcon");

icon.addEventListener("click", function () {
  if (passw.type == "password") {
    passw.setAttribute("type", "text");
    icon.classList.add("fa-eye-slash");
  } else {
    icon.classList.remove("fa-eye-slash");
    passw.setAttribute("type", "password");
  }
});



let emailInput = document.getElementById('email');

emailInput.addEventListener('keydwon', function() {

})

function validationEmail() {
  let form = document.getElementById("form");
  let email = document.getElementById("email").value;
  let errorText = document.getElementById("text");

  let emailStructure =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.match(emailStructure)) {
    form.classList.add("valid");
    errorText.innerHTML = "Your Email is Valid";
    errorText.style.color = "green";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    errorText.innerHTML = "Your Email is Invalid";
    errorText.style.color = "red";
  }

  if (email == "") {
    form.classList.remove("valid");
    form.classList.add("invalid");
    errorText.innerHTML = "Enter Your Email";
    errorText.style.color = "blue";
  }
}