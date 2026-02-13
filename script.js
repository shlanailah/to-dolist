document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const emptyImage = document.querySelector('.emptyimage');

    const toggleEmptyState = () => {
        emptyImage.style.display = taskList.children.length === 0 ? 'block' : 'none';
        //block=pake gambar klo gada tash, none=tampilin task
    }

    const addTask = (event) => { //fungsi
        event.preventDefault(); //mencegah reset jadi kosong stlh klik button
        const taskText = taskInput.value.trim(); 
        if(!taskText) {
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${taskText}</span> 
        <div class="taskbutton">
            <button class="editbtn"><i class="fa-solid fa-pen"></i></button>
            <button class="deletebtn"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        toggleEmptyState();
    };

    addTaskBtn.addEventListener('click', addTask); //memanggil fungsi
    taskInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            addTask(e); //manggil fungsi pake enter
        }
    });
});
