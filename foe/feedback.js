 
    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    
    function checkName(){
      var name = document.getElementById("name").value;
      if(name.length == 1 || !name.match(/^[A-Za-z]+ [A-Za-z]+$/)){
        nameError.innerHTML = "<p>Full name is required</p>";
        setTimeout(function(){
        nameError.style.display = "none";}, 3000);
        return false;
      }
      nameError.innerHTML = "<p>Valid</p>"
      setTimeout(function(){
      nameError.style.display = "none";}, 3000);
      return true;
    }
  

  function checkEmail(){
    var email = document.getElementById("email").value;
    if(email.length == 0 || !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)){
      emailError.innerHTML = "<p>Enter valid Email Address</p>";
      setTimeout(function(){
      emailError.style.display = "none";}, 3000);
      return false;
    }emailError.innerHTML = "<p>Valid</p>"
      setTimeout(function(){
      emailError.style.display = "none";}, 3000);
    return true;
    }

   
  function checkForm(){
  if(!checkName() || !checkEmail() ){
    submitError.style.display = "block";
    submitError.innerHTML = "<p>Please fill form correctly</p>";
    setTimeout(function(){
    submitError.style.display = "none";}, 3000);
    return false;
  }
  else return true;
}

