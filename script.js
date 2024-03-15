const submmitbtn = document.getElementById('submitbtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');


submmitbtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (validateName() && validateEmail() && validatePass() == true) {
    alert("form submitted succussfully");
  }


});

function validateName() {
  let Name = document.getElementById('name').value;

  if (Name.length == 0) {
    nameError.innerHTML = "Name is required";
    nameError.previousElementSibling.classList.add('fa-xmark');
    return false;

  }
  if (!Name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "write full name";
    nameError.previousElementSibling.classList.add('fa-xmark');

    return false;
  }

  nameError.innerHTML = "";
  nameError.previousElementSibling.classList.add('fa-check');
  return true;



}

//email

function validateEmail() {

  let email = document.getElementById('email').value;
  if (email.length == 0) {
    emailError.innerHTML = "email is required";
    emailError.previousElementSibling.classList.add('fa-xmark');
    return false;
  }


  if (!email.match(/^\w+([\.-]?\w+)*@\w([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "write valid email";
    emailError.previousElementSibling.classList.add('fa-xmark');

    return false;

  }
  emailError.innerHTML = "";
  emailError.previousElementSibling.classList.add('fa-check');

  return true;



}

//pass
function validatePass() {
  let pass = document.getElementById('password').value;

  if (pass.length == 0) {
    passError.innerHTML = "password is required";
    passError.previousElementSibling.classList.add('fa-xmark');
    return false;
  }

  // if (pass.length < 8) {
  //   passError.innerHTML = "password must be at least 8 character";
  // }

  if (!pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)) {
    passError.innerHTML = "password should contain 1 upeercase, 1 lowercase, 1 number and 1 special character";
    passError.previousElementSibling.classList.add('fa-xmark');

    return false;

  }


  passError.innerHTML = "";
  passError.previousElementSibling.classList.add('fa-check');
  return true;
}

