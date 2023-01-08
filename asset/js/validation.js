function validation(){
  let u_name = document.getElementById("username").value;
  let u_password = document.getElementById("password").value;
  if(u_name == '' ){
    alert("unable to login as there is no user name");

  }
  else if(u_password == ''){
    alert("unable to login as there is no password");
    
  }
  else if (u_name == 'admin'){
    if(u_password == 'admin@1998'){
      window.open('/salery.html','_self');
    }
    else{
      alert("Password Does not match");
    }
  }
  else{
    alert("user name does not match");
  }
  
}