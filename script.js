const userInput= document.getElementById('input-box');
const listContainer= document.getElementById('list-container');

function addTask(){
    if(userInput.value===''){
        alert("you need to type something.")
    }
    else{
        let li=document.createElement('li');
        li.innerText=userInput.value;
        listContainer.append(li);
        let span=document.createElement('span');
        span.innerText="\u00d7";
        li.append(span);
    }
    userInput.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false); 

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();