const email= document.getElementById("email");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const emailValue = email.value;

    if(emailValue === ""){
        setErrorFor(email, "O email correto é necessário pra recuperar a senha!");
    }else if(!checkEmail(emailValue)){
        setErrorFor(email,"Digite um endereço de email válido...");
    }else{
        setSuccessFor(email);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;//mensagem de erro
    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = "form-control success";//mensagem de sucesso
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}