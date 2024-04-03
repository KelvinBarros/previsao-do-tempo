


const key = "dbccb0e9b201f89435154043f66988c7";


function colocarNaTela(dados){
    console.log(dados);
    document.querySelector(".cidade").innerHTML ="Tempo em" + dados.name;
}



async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br`).then(resposta => resposta.json() );
    
    console.log(dados);
    
}

function pesquisar(){
    const cidade = document.querySelector(".local").value;
    
    buscarCidade(cidade);
}

