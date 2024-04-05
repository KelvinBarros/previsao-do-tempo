


const key = "dbccb0e9b201f89435154043f66988c7";


const campoDeEntrada = document.querySelector('.local');

campoDeEntrada.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const cidade = campoDeEntrada.value;
        buscarCidade(cidade)
            .then(colocarNaTela)
            .catch(error => console.error('Erro ao buscar cidade:', error));
    }
});




function colocarNaTela(dados) {
    console.log(dados);
    document.querySelector(".cidade").innerHTML =  dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".text-prev").innerHTML =  dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = `Umidade: ${dados.main.humidity}%`;
    document.querySelector(".img-icon").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}



async function buscarCidade(cidade) {/*USAR ASYNC PARA CHAMAR COISAS DE FORA, COMO SERVIDOR*/
    
    cidade = cidade.trim();
    cidade = cidade.charAt(0).toUpperCase() + cidade.slice(1);

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());


    colocarNaTela(dados)
}

function pesquisar() {
    const cidade = document.querySelector(".local").value;

    buscarCidade(cidade);
}

