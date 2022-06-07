date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();

if (month < 10) {
    month = "0"+month
}

if (day < 10) {
    day = "0"+day
}

document.getElementById("current_date").innerHTML = day + "/" + month + "/" + year;

function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// adicione um zero na frente de números<10
h=checkTime(h);
m=checkTime(m);
s=checkTime(s);
document.getElementById('current_hour').innerHTML=h+":"+m;
t=setTimeout('startTime()',500);
}

function checkTime(i) {
if (i<10)
{
i="0" + i;
}
return i;
}