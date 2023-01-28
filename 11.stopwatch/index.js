var display = document.getElementById('display');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var start = document.getElementById('start');

var minCurrent, secCurrent, interval;

for(var i = 0; i <= 60; i++)
{
    minutes.innerHTML+='<option value="'+i+'">'+i+'</option>';
}

for(var i = 1; i <= 60; i++)
{
    seconds.innerHTML+='<option value="'+i+'">'+i+'</option>';
}

start.addEventListener('click',function()
{
    minCurrent = minutes.value;
    secCurrent = seconds.value;

    display.childNodes[1].innerHTML = minCurrent + ":"+secCurrent;

    interval = setInterval(function()
    {
        secCurrent--;

        if(secCurrent <= 0)
        {
            if(minCurrent > 0)
            {
                minCurrent--;
                secCurrent = 59;
            }
            else
            {
                document.getElementById("sound").play();
                clearInterval(interval);
            }
        }
        
        display.childNodes[1].innerHTML = minCurrent + ":"+secCurrent;
    },1000);
})