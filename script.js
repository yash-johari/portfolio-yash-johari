//Getting the data from the form
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


// Validating the data entered
function validateForm(){

    clearMessages();
    let errorFlags = false;

    if( nameInput.value.length < 1 ){
        errorNodes[0].innerText = "Name cannot be blank!";
        nameInput.classList.add("errorBorder");
        errorFlags = true;
    }

    if( !emailIsValid(email.value) ){
        errorNodes[1].innerText = "Invalid Email!";
        email.classList.add("errorBorder");
        errorFlags = true;
    }

    if( phone.value.length  < 1 ){
        errorNodes[2].innerText = "Phone number cannot be blank!";
        phone.classList.add("errorBorder");
        errorFlags = true;
    }

    if( message.value.length < 1 ){
        errorNodes[3].innerText = "Please enter a message";
        message.classList.add("errorBorder");
        errorFlags = true;
    }

    if(!errorFlags){
        success.innerText = "Success!";
    }
}

// Clear error & success messages
function clearMessages(){
    for( i=0 ; i<errorNodes.length ; i++ ){
        errorNodes[i].innerText = "";
    }
    nameInput.classList.remove("errorBorder");
    email.classList.remove("errorBorder");
    phone.classList.remove("errorBorder");
    message.classList.remove("errororder");
}

// Check is email is valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

// sidebar

function showSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// sidebar