 
    var nameError = document.getElementById("name-error");
    var phoneError = document.getElementById("phone-error");
    var emailError = document.getElementById("email-error");
    var programError = document.getElementById("program-error");
    var dateError = document.getElementById("date-error");
    var submitError = document.getElementById("submit-error");
    var postError = document.getElementById("postcode-error");

    function checkName(){
      var name = document.getElementById("name").value;
      if(name.length == 1 || !name.match(/^[A-Za-z]+ [A-Za-z]+$/)){
        nameError.innerHTML = "<p>Full name is required</p>";
        return false;
      }
      nameError.innerHTML = "<p>Valid</p>"
      return true;
    }
  function checkPhone(){
      var phone = document.getElementById("phone").value;
      if(phone.length !=10 || !phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "<p>Enter valid Phone Number</p>";
        return false;
      }phoneError.innerHTML = "<p>Valid</p>"
      return true;
      }

  function checkToggle(){
      if(document.getElementById("checkbox").checked){
        window.location = 'signup.html';
        return false;
      }
       return true;
     } 
    

  function checkEmail(){
    var email = document.getElementById("email").value;
    if(email.length == 0 || !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)){
      emailError.innerHTML = "<p>Enter valid Email Address</p>";
      return false;
    }emailError.innerHTML = "<p>Valid</p>"
    return true;
    }

    function checkPostcode(){
      var postcode = document.getElementById("postcode").value;
      if(postcode.length !=6 || !postcode.match(/^[0-9]{6}$/)){
        postError.innerHTML = "<p>Enter valid Pincode</p>";
        return false;
      }postError.innerHTML = "<p>Valid</p>"
      return true;
      }

  

  function checkForm(){

  if (document.getElementById("checkbox").checked){if(!checkName() || !checkEmail() || !checkProgram() || !checkDate() || !checkPostcode()){
  submitError.style.display = "block";
  submitError.innerHTML = "<p>Please fill form correctly</p>";
  setTimeout(function(){
    submitError.style.display = "none";}, 3000);
    return false;
  }
  else return true;
}
else{
  if(!checkName() || !checkPhone() || !checkEmail() || !checkProgram() || !checkDate() ){
    submitError.style.display = "block";
    submitError.innerHTML = "<p>Please fill form correctly</p>";
    setTimeout(function(){
    submitError.style.display = "none";}, 3000);
    return false;
  }
  else return true;
}
}
