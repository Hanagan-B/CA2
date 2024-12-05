/*Student x23358297 - Bruna Rodrigues de Oliveira*/

var emailError = document.getElementById("email-error");
var submitError = document.getElementById("submit-error");

function validateEmail(){ 
    var email = document.getElementById("sub-email").value;

    if(email.length == 0){
        emailError.innerHTML = 'Please enter email'
        return false;

    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'invalid email'
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-check-double"> </i>';
    return true;
}
function validateForm(){
    if (!validateEmail()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to submit";
        setTimeout(function(){submitError.style.display = "none";}, 3000);
        return false;
    }
    submitError.innerHTML = alert('Thank you for your subscription');
    setTimeout(function(){submitError.style.display = "none";}, 0.1);

 }