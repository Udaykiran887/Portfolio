function sendmail (){
    let parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,

    }
    emailjs.send("service_v6lx5rs", "template_lpiqyr9", parms ).then(alert("email sent!!!"))
}