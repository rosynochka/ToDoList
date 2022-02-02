let Todobutton=document.querySelector(".Todobutton")
let Todoinput=document.querySelector(".Todoinput")
let Todolist=document.querySelector(".Todolist")

Todobutton.addEventListener("click",function(){

	let Tododiv=document.createElement("div")
	Tododiv.classList.add("Tododiv")
	Todolist.appendChild(Tododiv)

	let Todoli=document.createElement("li")
	Todoli.classList.add("Todoli")
	Tododiv.appendChild(Todoli)
	Todoli.innerHTML=Todoinput.value
    Todoinput.value=""

    let Tbutton=document.createElement("button")
    Tbutton.classList.add("Tbutton")
    Tododiv.appendChild(Tbutton)
    Tbutton.innerHTML='<i class="fas fa-trash"></i>'

    let Cbutton=document.createElement("button")
    Cbutton.classList.add("Cbutton")
    Tododiv.appendChild(Cbutton)
    Cbutton.innerHTML='<i class="fas fa-check"></i>'
})

Todolist.addEventListener("click",function(event){
    let item = event.target

    if (item.classList[0]=="Tbutton"){
    	let todo = item.parentElement
    	todo.classList.add("fall")
    	todo.addEventListener("transitionend",function(){
    	   todo.remove()
    	})
    }

    if (item.classList[0]=="Cbutton"){
    let todo = item.parentElement
    todo.classList.toggle("complete")
    }
})

document.querySelector(".todofilter").onchange=function(){
	let option = this.value
	let todos = document.querySelectorAll(".Tododiv")
    todos.forEach(function(element){
    	switch(option){
    		case"all":element.style.display="flex";break;
    		case"completed": if (element.classList.contains("complete")){
    			element.style.display="flex"
    		}
    		else{
    			element.style.display="none"
    		} break;
    		case"uncompleted":if (element.classList.contains("complete")){
    			element.style.display="none"
    		}
    		else{
    			element.style.display="flex"
    		} break;
    	}
    })
}