const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);

  // 로컬스토리지에 username : value값 저장
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  paintGreeting(username);
}

// greeting 중복구문 처리
function paintGreeting(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  const date = new Date();
  if(date.getHours()>=7 && date.getHours()<=22){
    greeting.innerText = `오늘도 즐거운 하루네요, ${username}`;  
  } else{
    greeting.innerText = `좋은 꿈 꾸시길, ${username}`;
  } 
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername===null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else{
  paintGreeting(saveUsername);
}
