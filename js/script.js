//Função que adiciona tarefa
function addTask() {
    //Titulo Tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if (taskTitle) {
        debugger;
        // Clona o template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true); //Clona uma estrutura da DOM

        //Adiciona título
        newTask.querySelector(".task-title").textContent = taskTitle;

        //Remover classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //Adiciona tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        //Adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function () {
            removeTask(this);
        });

        //Adicionar o evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function () {
            completeTask(this);
        })

        //Limpar texto
        document.querySelector("#task-title").value = "";
    }
}

//Função que remove tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

//Função de completar a tarefa
function completeTask(task) {
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}

//Evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    addTask();
})

// addBtn.addEventListener("keypress", (e) => {
//     e.preventDefault();

//     if (e.key === 'Enter') {
//         addTask();
//     }
// })