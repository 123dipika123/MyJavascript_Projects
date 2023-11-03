function AddTodo(){
    var taskname = document.getElementById('taskname').value;
    var listTodo =  document.getElementById('listTodo');


    var newTodoItem = document.createElement('div')
    var Todoname = document.createElement('li')
    Todoname.innerHTML= taskname

    var DeleteBtn = document.createElement('i')
    DeleteBtn.classList.add('fas')
    DeleteBtn.classList.add('fa-trash')
    listTodo.appendChild(Todoname)
    listTodo.appendChild(DeleteBtn)
    listTodo.appendChild(newTodoItem)
}

var todoDiv = document.getElementById('listTodo')
todoDiv.addEventListener('click', deleteItem)

function deleteItem(e){
   const element = e.target
   if (element.classList[0]=='fas'){
    element.parentElement.remove()
   }
}