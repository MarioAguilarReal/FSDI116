document.getElementById('email-form').addEventListener("submit", (event)=>{
    event.preventDefault();

    const form = event.target;
    console.log(form);
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const subject = form.elements.subject.value;
    const message = form.elements.message.value;

    //acces to you EmailJS account
    //this is different for all of you!
    emailjs.init("lEKUv4aI3RD2hMUr6");

    //let's build the object, remember, the name of the keys need to be the same template
    const params = {
        from_email : email,
        from_name : name,
        subject : subject,
        message : message,
    }
    const sendEmail = async () =>{
            let resp = await emailjs.send("service_1c8jrp5", "template_hd3g8ym", params)
            console.log(resp)

            // .then(function (response){
            //     alert("Email sent successfully");
            //     form.reset();
            // }, function (error){
            //     alert("Error sending mail");
            // });

    }

    if (!subject){
        const result = confirm("Subject is empty! Are you sure you want to send the email?");


        if (result){
            sendEmail();
        } else{

        }
    }else{
        sendEmail();
    }



});
