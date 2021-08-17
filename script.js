function validation(){
    console.log('validation');
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;
    var text;



    if(name.length==0){
        text="Please Enter your Name";
        error_name.innerHTML = text;
        return false;
    } else{ text=" "
error_name.innerHTML=text;
}

    if(name.length<3||name.length>20||name.length==" "|| name.includes('  ')){
        text="Please Enter Valid Name";
        error_name.innerHTML = text;
        return false;
    }else{text=" "
error_name.innerHTML=text;
}
   if(isNaN(phone) || phone.length==0 || phone.includes('e')){
        text="Please Enter your Number";
        error_phone.innerHTML = text;
        return false;
}    


    if(isNaN(phone) || phone.length!=10){
        text="Please Enter Valid Number";
        error_phone.innerHTML = text;
        return false;
    }else{
        text=" "
        error_phone.innerHTML=text;
    }

    




    
    if(email.length==0){
        text="Please Enter Your E-mail";
        error_mail.innerHTML = text;
        return false;
    }

    if(email.indexOf("@")== -1 || email.length<6){
        text="Please Enter Valid E-mail";
        error_mail.innerHTML = text;
        return false;
    }else{
        text=" "
        error_mail.innerHTML=text;
    } 

    if(message.length==0){
        text="Please Enter Your Message"
        error_message.innerHTML = text;
        return false;
    } 


    if(message.length<=40){
        text="Please Enter More Than 40 Characters"
        error_message.innerHTML = text;
        return false;
    }else{
        text=" "
        error_message.innerHTML=text;
    }

    alert("Submitted Succesfully!")
    data = {
        name, phone, email, message }
    mail(data)
    return false;

}

function mail(data) {
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbxqeL4Dw3JtyLmmzW0AXjJDTxQtmQ8Sc0ZGTn_o2raFt_gNhJUOrJcW4l8XEfRY5byu/exec",
            data:data,
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
}
