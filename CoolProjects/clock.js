const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(()=>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    //Digital Clock
    let hours=document.getElementById('hours');
    let minutes=document.getElementById('minutes');
    let seconds=document.getElementById('seconds');
    let ampm=document.getElementById('ampm');

    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM";

    // Convert 24 hour to 12 hour
    if(h >= 12){
        h = h - 12;
    };

    // add zero before single digit number
    h=(h<10)?"0"+h:h
    m=(m<10)?"0"+m:m
    s=(s<10)?"0"+s:s

    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    ampm.innerHTML=am;
});