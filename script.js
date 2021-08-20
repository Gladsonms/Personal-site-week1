
////To check Name///
var nameField = document.getElementById('name')
var validname=false;

nameField.addEventListener('blur', () => {
    var name = nameField.value
    if(name.length==0){
        text="Please Enter your Name";
        nameError.innerHTML = text;
        validname=false;
    } else if(name.length<4){
        nameError.innerHTML="Name should be more than 3 Characters"
        validname=false;
    }else{validname=true;
   
}
})
nameField.addEventListener('keyup',()=>{
    var name = nameField.value
     if(name.includes('  ')){
         validname=false;
         nameError.innerHTML="Name should not contain 2 concecutive spaces"

     }else{
         validname=true;
         nameError.innerHTML=" "
       
     }
})

////To check phone number////
var phoneField = document.getElementById('phone')
var validphone=false;
phoneField.addEventListener('blur',()=>{
    var phone=phoneField.value
    if(isNaN(phone) || phone.length==0){
         validphone=false;
        text="This field should not be blank";
        phoneError.innerHTML = text;
   
} else if(isNaN(phone) || phone.length<10){
     validphone=false;
    text="Please Enter Valid Number";
    phoneError.innerHTML = text;
   
}else{
    phoneError.innerHTML=" ";
     validphone=true;
}     
})

//////To check email///////
var emailField = document.getElementById('email')
var validmail=false;
emailField.addEventListener('blur',()=>{
    var email=emailField.value
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if(email.length==0){
        text="This field cannot be empty";
         validmail=false;
         mailError.innerHTML = text;
       
    }else if (!email.match(regexEmail)) {
        mailError.innerHTML = 'This email id is not valid.'
        validmail=false;
      } else {
        validmail=true;
        mailError.innerHTML = ''
      
    }
    
})
//////To check message////////
var messageField=document.getElementById('message')
var validmessage=false;
messageField.addEventListener('blur',()=>{
    var message=messageField.value
    if(message.length<=25){
        validmessage=false;
        text="Please Enter More Than 25 Characters"
        messageError.innerHTML = text;
       
    }else{
        validmessage=true;
        text=" "
        messageError.innerHTML=text;
        
    }
})


  //////To check email///////
var emailInput = document.getElementById('email')
var validmail=false;
emailInput.addEventListener('blur',()=>{
    var email=emailInput.value
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if(email.length==0){
        text="This field cannot be empty";
         validmail=false;
         mailError.innerHTML = text;
       
    }else if (!email.match(regexEmail)) {
        mailError.innerHTML = 'This email id is not valid.'
        validmail=false;
      } else {
        validmail=true;
        mailError.innerHTML = ''
      
    }
    
})
    
    
      //////To check message////////
var messageField=document.getElementById('message')
var validmessage=false;
messageField.addEventListener('blur',()=>{
    var message=messageField.value
    if(message.length<=25){
        validmessage=false;
        text="Please Enter atleast More Than 30 Characters"
        error_message.innerHTML = text;
       
    }else{
        validmessage=true;
        text=" "
        error_message.innerHTML=text;
        
    }
})
  




function mail() {
    
    if(validname==true && validphone==true && validmail==true && validmessage==true){
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbxqeL4Dw3JtyLmmzW0AXjJDTxQtmQ8Sc0ZGTn_o2raFt_gNhJUOrJcW4l8XEfRY5byu/exec",
            data:$("#submit-form").serialize(),
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
}