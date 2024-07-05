function register(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="")
    {
        alert("Please Fill Username ");
    }
    if(password=="")
    {
        alert("Please Fill Password ");
    }
    else{
        document.write("<h1>Note: </h1>"+username+password);
    }
}



function register() {

     document.getElementById("name1");
     document.getElementById("email1");
     document.getElementById("email2");
     document.getElementById("pass1");
     document.getElementById("pass2");
     if(name1.value.trim()=="")
     {
        document.getElementById("name1").innerHTML="Field Required"
        name1.style.border="1px red solid";
     }
     else{
         document.getElementById("name1").innerHTML="";
         name1.style.border="1px gray solid";
     }
     if(email1.value.trim()=="")
     {
        document.getElementById("email1").innerHTML="Field Required"
        email1.style.border="1px red solid";
     }
     else{
         document.getElementById("email1").innerHTML="";
         email1.style.border="1px gray solid";
     }
     if(email2.value.trim()=="")
     {
        document.getElementById("email2").innerHTML="Field Required"
        email2.style.border="1px red solid";
     }
     else{
         document.getElementById("email2").innerHTML="";
         email2.style.border="1px gray solid";
     }
     if(pass1.value.trim()=="")
     {
        document.getElementById("pass1").innerHTML="Field Required"
        pass1.style.border="1px red solid";
     }
     else{
         document.getElementById("pass1").innerHTML="";
         pass1.style.border="1px gray solid";
     }
       if(pass2.value.trim()=="")
     {
        document.getElementById("pass2").innerHTML="Field Required"
        pass2.style.border="1px red solid";
     }
     else{
         document.getElementById("pass2").innerHTML="";
         pass2.style.border="1px gray solid";
     }
}