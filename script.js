let countdown;
let res=0;
function startTimer()
{
    const time=document.getElementById('number').value;
    res=parseInt(time);
    if(isNaN(res) || res<0)
    {
        alert("Please enter the valid input");
        return 0;
    }
    clearInterval(countdown);
    display(res);
    countdown=setInterval(function(){
        if (res<=0){
            clearInterval(countdown);
            alert('Time is up!');
            return;
        }
        res--;
        display(res);
    },1000);
}
function stopTimer()
{
    clearInterval(countdown);
    document.getElementById('timer1').innerText="00:00";
    document.getElementById('number').value="";
}
function display(seconds)
{
    const minutes=Math.floor(seconds/60);
    const remainingSeconds=seconds%60;
    document.getElementById('timer1').innerText=`${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
