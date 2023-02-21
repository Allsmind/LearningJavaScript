

let listElement =document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listaDeTarefas")) || [];


function mostrarTarefas(){
    listElement.innerHTML = "";

    tarefas.map((task) => {
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(task);
        let posicao = tarefas.indexOf(task);
        let linkText = document.createTextNode("Excluir");
        let linkElement = document.createElement("a");


        linkElement.setAttribute("href","#");
        
        linkElement.appendChild(linkText)        

        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)

        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}
mostrarTarefas();

function novaTarefa(){
    if(inputElement.value === ''){
        alert("Digite alguma tarefa!");
        return false;
    }else{
        
        let adicionarTarefa = inputElement.value;

        tarefas.push(adicionarTarefa);
        inputElement.value = '';

        mostrarTarefas();
        salvar();

    }
}


function deletarTarefa(posicao){
    //alert("posicao " +posicao);
    tarefas.splice(posicao,1);
    mostrarTarefas(); 
    salvar();

    
}


function salvar(){
    localStorage.setItem("@listaDeTarefas", JSON.stringify(tarefas))

}

buttonElement.onclick = novaTarefa