const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

input.addEventListener("keypress", function(event){
    if(event.key==="Enter"){
        addTask();
    }
});

function addTask(){

    if(input.value.trim()===""){
        alert("Please enter a task.");
        return;
    }

    const li=document.createElement("li");

    const taskText=document.createElement("span");
    taskText.textContent=input.value;

    const actions=document.createElement("div");
    actions.className="actions";

    const doneBtn=document.createElement("button");
    doneBtn.textContent="Done";
    doneBtn.className="done";
    doneBtn.onclick=function(){
        taskText.classList.toggle("completed");
    };

    const editBtn=document.createElement("button");
    editBtn.textContent="Edit";
    editBtn.className="edit";
    editBtn.onclick=function(){
        let updated=prompt("Modify Task",taskText.textContent);

        if(updated!==null && updated.trim()!==""){
            taskText.textContent=updated;
        }
    };

    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";
    deleteBtn.className="delete";
    deleteBtn.onclick=function(){
        taskList.removeChild(li);
    };

    actions.appendChild(doneBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(taskText);
    li.appendChild(actions);

    taskList.appendChild(li);

    input.value="";
}