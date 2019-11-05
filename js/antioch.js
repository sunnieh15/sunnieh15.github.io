function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out before submitting this form.");
    return false;
  }
  var x = document.forms["myForm"]["subject"].value;
  if (x == "") {
    alert("Subject must be filled out before submitting this form.");
    return false;
  }
  var y = document.forms["myForm"]["email"].value;
  if (y == "") {
    alert("Email must be filled out before submitting this form.");
    return false;
  } else if (y != "") {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)}
}


