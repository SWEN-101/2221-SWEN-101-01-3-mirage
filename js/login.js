/*
Controls the hiding and displaying of the username and password creation
When giving a username and password that has been stored will log the user in
@Author: Ian Fanfair
*/
function hide_login_creation()
{
    /*Onload will hide the create username and create password elements on the website*/
    const create_user = document.getElementById("create_username").style.visibility = "hidden";
    const create_pass = document.getElementById("create_password").style.visibility = "hidden";
}