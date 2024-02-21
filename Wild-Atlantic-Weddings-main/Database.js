const Users = [
   {user:"Aryan",password:"password1"},
   {user:"Sahil",password:"password2"},
   {user:"Samir",password:"password3"},
   {user:"Gyan",password:"password4"},
   {user:"Aryan",password:"password5"},
];

if(window.localStorage.getItem("Logged")==null){
    
}
function checkUser(){
    let enteredUserName = document.getElementById('username').value;
    let enteredPassword = document.getElementById('password').value;

   Users.map((item)=>{
    if(enteredUserName==item.user&&enteredPassword==item.password&&window.localStorage.getItem("Logged")==null){
       window.location.replace("index.html");
       window.localStorage.setItem("Logged",item.user);
       document.getElementById('logbutton').hidden=fasle;
    window.location.reload();
    }else if(window.localStorage.getItem("Logged")!=null){
        alert("You are already Logged in "+window.localStorage.getItem('Logged'));
    }
   })
}

function Logout(){
    if(window.localStorage.getItem('Logged')!=null){
        window.localStorage.removeItem('Logged');
        document.getElementById('logbutton').hidden=true;
        alert("You are safely logged out");
    }
}