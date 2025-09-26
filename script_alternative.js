// This script make the same job with the other script (script.js). This is just an alternative Code practice.

const button = document.querySelector('.btn');
const notes_container = document.querySelector('.notes-container');

if(localStorage.getItem("notes") != null){
    notes_container.innerHTML = localStorage.getItem("notes");
}

document.addEventListener("click", (e)=>{
    const input_box = document.querySelectorAll(".input-box");
    //const img = document.querySelectorAll(".delete-img");

    if(e.target.tagName === "BUTTON"){
        notes_container.innerHTML += `<div contenteditable="true" class="input-box"><img class="delete-img" src="images/delete.png"></div>`;
            }
    
    else if(e.target.className === "delete-img"){
        e.target.parentElement.remove();

    }
    localStorage.setItem("notes", notes_container.innerHTML);

})

notes_container.addEventListener("keyup", ()=>{
    localStorage.setItem("notes", notes_container.innerHTML);

})