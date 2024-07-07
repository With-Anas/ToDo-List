let input = document.getElementById("input");
let text = document.querySelector(".text");

function Add(){
    if(input.value == ""){
        alert("Please Enter Task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${input.value}<button class="i">DEL</button>`;
        text.appendChild(newEle);
        input.value="";
        newEle.querySelector(".i").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
    }
}