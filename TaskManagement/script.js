const taskTitle = document.querySelector("#taskInput");
const taskDes = document.querySelector("#taskDes");
const display = document.querySelector("#display");

function taskSubmit(e) {
    e.preventDefault();
    display.innerHTML += `
    <div class="disDiv">
        <h2>${taskTitle.value}</h2>
        <p>${taskDes.value}</p>
        <button class="completed" onclick="com(event)">COMPLETED</button>
        <button class="delete" onclick="del(event)">DELETE</button>
    </div>
`
}


function del(e) {
    e.target.parentElement.remove();
}

function com(e){
    e.target.parentElement.remove();
    alert(e.target.parentElement.contains("completed").textContent + " " + "COMPLETED");
}