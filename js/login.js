/*
Controls the hiding and displaying of the username and password creation
When giving a username and password that has been stored will log the user in
@Author: Ian Fanfair
*/

const USERS = []

class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
}
function hide_login_creation()
{
    /*Onload will hide the create username,create password, and submit elements*/
    const create_user = document.getElementById("create_username").style.visibility = "hidden";
    const create_pass = document.getElementById("create_password").style.visibility = "hidden";
    const submit = document.getElementById("submit").style.visibility = "hidden";
}

function show_login_creation()
{
    /*When the create account button is pressed will display the create username,password, and submit elements*/
    const create_user = document.getElementById("create_username").style.visibility = "visible";
    const create_pass = document.getElementById("create_password").style.visibility = "visible";
    const submit = document.getElementById("submit").style.visibility = "visible";
}

function submit_credentials()
{
    /*Stores the login for the new user created*/
    const username = document.getElementById("new_usr").value;
    const password = document.getElementById("new_pwd").value;

    new_user = new User(username,password);
    USERS.push(new_user);

    hide_login_creation();
}

function login()
{
    /*Check if the user exist and if so will login them into the app*/
    const username = document.getElementById("usr").value;
    const password = document.getElementById("pwd").value;

    for(let i = 0; i < USERS.length; i++)
    {
        user = USERS[i];
        if(username.toLowerCase() == user.username.toLowerCase() && password.toLowerCase() == user.password.toLowerCase())
        {
            //Just nned to replace the url for this
            console.log("User Exist");
            //window.location.href = ""
        }
    }
}