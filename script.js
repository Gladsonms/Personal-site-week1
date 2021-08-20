    
   
    var text;
    var nameRegex=/^[a-zA-Z ]+$/;
    var emailRegex=/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
    // Check name
    var nameField=document.getElementById("name")
    nameField.addEventListener("blur",()=>
    {
        var name = nameField.value
        if(name.length==0){
            text="Please Enter your Name";
            nameError.innerHTML = text;
            
        } else if(name.length<3||name.length>20||name.includes('  ')|| !name.match(nameRegex)){
            text="Please Enter Valid Name";
            nameError.innerHTML = text;
            
        }else{text=" "
        nameError.innerHTML=text;
    }
    })
    
    //check phone
    var phoneField=document.getElementById("phone");
    phoneField.addEventListener("blur",()=>{
        var phone=phoneField.value
        if(isNaN(phone) || phone.length==0 || phone.includes('e')){
            text="Please Enter your Number";
            phoneError.innerHTML = text;
            
    }    
    
    
        if(isNaN(phone) || phone.length!=10){
            text="Please Enter Valid Number";
            phoneError.innerHTML = text;
            
        }else{
            text=" "
            phoneError.innerHTML=text;
        }
    

    })
  
    


  //check mail
    var emailField=document.getElementById("email");

    emailField.addEventListener("blur",()=>{
        var email = emailField.value;
        if(email.length==0){
            text="Please Enter Your E-mail";
            mailError.innerHTML = text;
            
        }
    
        else if(!email.match(emailRegex)){
            text="Please Enter Valid E-mail";
            mailError.innerHTML = text;
           
        }else{
            
            mailError.innerHTML=" ";
        } 
    
    })
    
    
    
      
         //check messsage
        var messageFiled=document.getElementById("message");
        var message = messageFiled.value;
        message.addEventListener("blur",()=>{
    if(message.length==0){
        text="Please Enter Your Message"
        messageError.innerHTML = text;
        
    } 
            if(message.length<=40){
                text="Please Enter More Than 40 Characters"
                messageError.innerHTML = text;
                //return false;
            }else{
                text=" "
                messageError.innerHTML=text;
            }
        
        })
       
    
        
    alert("Submitted Succesfully!")
    data = {
        name, phone, email, message }
    mail(data)



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