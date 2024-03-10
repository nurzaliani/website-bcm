const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = 'Full Name : ${fullName.value}<br> Email : ${email.value} Phone : ${phone.value} Subject : ${subject.value} Message : ${mess.value}';
   


    Email.send({
        SecureTaken:"1416bdad-1ee6-4745-a807-3956d4fb4c35",
        Host : "smtp.elasticemail.com",
        Username : "zfninerkk@gmail.com",
        Password : "54F04AC7C3BE549A6C69BBBD1B755FE3C7D5",
        To : 'zfninerkk@gmail.com',
        From : "zfninerkk@gmail.com",
        Subject : subject.value,
        Body : bodyMessage 
    }).then(
      message => {
        if(message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
            });
        }
      }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".item");

    for (const item of items){
        if (item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != ""){
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup",() => {if (item.value != ""){
            if (item.value == ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
        }
      });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]=+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt .email")
}

if (!email.value.match(emailRegex)){
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value !=""){
        errorTxtEmail.innerText="Enter a valid email";
    }

    else{
        errorTxtEmail.innerText="Email can't be blank";
    }
}
else{
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
}

form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error")&& !email.classList.contains("error")&& !phone.classList.contains("error")&& !subject.classList.contains("error")&& !mess.classList.contains("error")){
        sendEmail();

        form.reset();
        return false;
    }
});