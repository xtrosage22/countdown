
const countdown = () =>{
const countDate = new Date('November 06, 2021 00:00:00').getTime();
//get current time
const now = new Date().getTime();
//differnce in gap
const gap = countDate - now;

//how time work
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//calculate the gap 
const txtDay = Math.floor(gap / day);
const txtHour = Math.floor((gap % day) / hour);
const txtMinute = Math.floor((gap % hour) / minute);
const txtSeconds = Math.floor((gap % minute) / second);

document.querySelector('.day').innerText = txtDay;
document.querySelector('.hour').innerText = txtHour;
document.querySelector('.minute').innerText = txtMinute;
document.querySelector('.second').innerText = txtSeconds;
};
setInterval(countdown, 1000);