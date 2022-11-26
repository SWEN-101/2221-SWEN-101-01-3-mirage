/*
Javascript code for donation buttons to change the values of the progress bars
Removes gCoins from the top right total
@author: Ian Fanfair
*/
function donation(charity,value,current)
{
    /*When donation button is pressed triggers this function passing in the charity that is getting the coins
    The value being taken out of the users current stockpile.
    The function will also adjust the progress bar and the current money being given*/
    
    //g_coin reduction
    total = document.getElementById("g_coin").innerHTML;
    total = parseInt(total);
    if(total <= 0)
    {
        return
    }
    total = total - value;
    document.getElementById("g_coin").innerHTML = total.toString();

    //progress bar
    progress_bar = document.getElementById(charity).style.width;
    progress_bar = parseInt(progress_bar);
    if(value == 100)
    {
        percent_increase = 1;
    }
    else if(value == 1000)
    {
        percent_increase = 10;
    }
    new_progress_bar = progress_bar + percent_increase;

    document.getElementById(charity).style.width = new_progress_bar+"%";

    //current in dollars
    current_value = document.getElementById(current).innerHTML;
    const my_array = current_value.split(" ");
    current_value = my_array[1]
    current_value = parseInt(current_value)
    new_value = current_value + value
    document.getElementById(current).innerHTML = my_array[0] + " "+ new_value
}