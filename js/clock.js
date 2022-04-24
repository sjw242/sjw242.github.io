const clockTitle = document.querySelector("#clock");

function clockPlay() {
  const date = new Date();

  const STRINGHOUR = String(date.getHours());
  const STRINGMINUTE = String(date.getMinutes()).padStart(2, "0");

  const resultDate = `${STRINGHOUR}:${STRINGMINUTE}`;

  clockTitle.innerHTML = resultDate;
}

clockPlay();
setInterval(clockPlay, 1000);
