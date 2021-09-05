let nameProm = prompt("Enter your name","Enter yourname")
let nameSpan = document.querySelector("#myName")

nameSpan.innerHTML = nameProm;

var days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

function showTime(){
    var date = new Date();
    var day = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    document.querySelector('#myClock').innerHTML = hours + ":" + minutes + ":" + seconds +" "+ days[day];
    displayTime();
}

function displayTime(){
    var refresh = 1000; 
    mytime = setTimeout('showTime()',refresh)
}

