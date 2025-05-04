const formulario = document.querySelector("form");
const Ititulo = document.querySelector(".titulo");
const Idescricao = document.querySelector(".descricao");

function criar () {
    fetch("http://localhost:8080/tarefas",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                titulo: Ititulo.value,
                descricao: Idescricao.value
            })
        }
    )
    .then(function (res) {console.log(res)})
    .catch(function (res) {console.log(res)})
};

function limpar(){
    Ititulo.value = "";
    Idescricao.value = "";
};

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    criar();
    limpar();
   
});