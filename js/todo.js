const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];     // 나중에 변경됨
const TODOS_KEY = "todos";

// 로컬스토리지 저장
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();

    // id값이 숫자고 li.id가 String이라서 적용되지 않음. 숫자로 바꿔줘야함
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;     // newTodo의 식별왕 시간 값을 id로 적용
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now()      // 식별용 시간 값
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

function sayHello(item){
    // 가지고있는 값 전부 적용
    console.log("Hello "+item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    // String 값들을 Array로 가져오기
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    
    // 변수에서 바로 function 적용
    // parsedToDos.forEach((item) => console.log("this is the turn " + item));
}

// 지우고 싶은 item을 제외하고 새로운 Array 만들기 = filter
function sexyFilter(){

}