// script navbar

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    seacrhForm.classList.remove('active');
}

let seacrhForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    seacrhForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    seacrhForm.classList.remove('active');
}

//script read more

function myFunction(x) {
    var dots = this.document.getElementsByClassName("dots");
    var moreText = this.document.getElementsByClassName("more");
    var btnText = this.document.getElementsByClassName("mybtn");
    console.log(dots)
    if (dots[x].style.display === "none") {
        dots[x].style.display = "inline";
        btnText[x].innerHTML = "Read more";
        moreText[x].style.display = "none";
    } else {
        dots[x].style.display = "none";
        btnText[x].innerHTML = "<br>Read less";
        moreText[x].style.display = "inline";
    }
}

//script send mail

function sendEmail() {
    var name = document.getElementsByName("name")[0].value;
    var mail = document.getElementsByName("email")[0].value;
    var messages = document.getElementsByName("messages")[0].value;
    var number = document.getElementsByName("number")[0].value;
    Email.send(mail,
        "abdul.tamsis@gmail.com",
        "visitors " + name + " Sending Email from website ARA Coffe Shop",
        messages + "</br>" + "With my phone number : " + number,
        "smtp.gmail.com",
        "abdul.tamsis@gmail.com",
        "egzjtddohxypdzzm")
    alert("The email message was sent");
    setTimeout(() => {

    }, 5);
    window.location.reload();
}