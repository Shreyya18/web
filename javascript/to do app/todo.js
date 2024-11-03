// const taskForm=document.getElementById("task-form");
// const openTaskFormBtn=document.getElementById("open-task-form-btn");
// const closeTaskFormBtn=document.getElementById("close-task-form-btn");
// const titleInput=document.getElementById("title-input");
// const dateInput=document.getElementById("date-input");
// const descriptionInput=document.getElementById("description-input");
// const confirmCloseDialog=document.getElementById("confirm-close-dialog");
// const cancelBtn=document.getElementById("cancel-btn");
// const discardBtn=document.getElementById("discard-btn");
// const addOrUpdateTaskBtn=document.getElementById("add-or-update-task-btn");
// const taskContainer=document.getElementById("tasks-container");
// function reset(){
//     titleInput.value=" ";
// }
// openTaskFormBtn.addEventListener("click", ()=>{

//     taskForm.classList.toggle("hidden");
// }
// );
// cancelBtn.addEventListener("click", ()=>{

//     confirmCloseDialog.close();
// }
// );
// closeTaskFormBtn.addEventListener("click",()=>{

//     confirmCloseDialog.showModal();
// }
// );

// discardBtn.addEventListener("click",()=>{

//     taskForm.classList.toggle("hidden");
//     confirmCloseDialog.close();
//     reset();
// });
// const edit=(btnEL)=>{

// }

// addOrUpdateTaskBtn.addEventListener("click", () => {

//     taskContainer.innerHTML += `
//     <div class="task">
//         <p><strong>Title: ${titleInput.value}</strong></p>
//         <p><strong>Date: ${dateInput.value}</strong></p>
//         <p><strong>Description: ${descriptionInput.value}</strong></p>
//         <button class="btn" type="button" onclick="edit(this)">edit</button>
//         <button class="btn" type="button" onclick="delete(this)">delete</button>
//     </div>`;
//     ; titleInput.value = ''; 
//     dateInput.value = ''; 
//     descriptionInput.value = ''; 
//     taskForm.classList.toggle("hidden");
    
// });

// const delete=(btnEL)=>{
//     btnEL.title
// }

