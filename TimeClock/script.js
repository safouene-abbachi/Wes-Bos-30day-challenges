const secondsHandsElement = document.querySelector('.sec-hand');
const minutesHandsElement = document.querySelector('.min-hand');
const hoursHandsElement = document.querySelector('.hour-hand');
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsToDegrees = (seconds / 60) * 360;
  secondsHandsElement.style.height = '3px';
  secondsHandsElement.style.transform = `rotate(${secondsToDegrees + 90}deg)`;

  const minutes = now.getMinutes();
  const minutesToDegrees = (minutes / 60) * 360;
  minutesHandsElement.style.transform = `rotate(${minutesToDegrees + 90}deg)`;

  const hours = now.getHours();
  const hoursToDegrees = (hours / 12) * 360;
  hoursHandsElement.style.right = '50%';
  hoursHandsElement.style.width = '35%';
  hoursHandsElement.style.transform = `rotate(${hoursToDegrees + 90}deg)`;

  console.log({ seconds });
  console.log({ minutes });
  console.log({ hours });
}

setInterval(() => {
  setDate();
}, 1000);
