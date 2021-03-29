function userLogin(){
    // var randomID = Math.random();
    var user = alert("Welcome user, copy the randomID that displays!!");
    var randomID = Math.random();
    var newID = randomID;
    alert(newID);
    var userName = prompt("Your name");
    var password = prompt("Your password");

    if(password.length >= 8){
        var newPassword = prompt("Enter randomID")
        if(newPassword == newID){
            alert("Successful!!.. \nWelcome!")
        }

        else{
            alert("Wrong!!...\nStart again!!")
            userLogin()
        }
    }
    else{
        alert("Start again")
        userLogin()
    }

}
userLogin();