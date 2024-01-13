const countdown = () => {
  const countDate = new Date("Jan 14,2024 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  //how does the fuck work
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //Calculate the shit
  const textDay = Math.floor(gap / 1000 / 60 / 60 / 24);
  const textHour = Math.floor((gap / 1000 / 60 / 60) % 24);
  const textMinute = Math.floor((gap / 1000 / 60) % 60);
  const textSecond = Math.floor((gap / 1000) % 60);
  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);
