const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    // second hand
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    //min hand
    const min = now.getMinutes();
    const minDegrees = (min / 60) * 360 + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    //hour hand
    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);