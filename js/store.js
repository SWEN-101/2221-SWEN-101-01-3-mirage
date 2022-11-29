function purchase(price)
{
    total = document.getElementById("g_coin").innerHTML;
    total = parseInt(total)

    if(total - price < 0)
    {
        return
    }
    total = total - price
    document.getElementById("g_coin").innerHTML = total.toString();

}