//placares
const placarMaquina = document.querySelector('.ponto1');
const placarVoce = document.querySelector('.ponto2');

//indicador de ganhador
const frameGanhador = document.querySelector('.ganhador');

//escolhas da maquina
const imgPedraMaquina = document.querySelector('.pedra');
const imgPapelMaquina = document.querySelector('.papel');
const imgTesouraMaquina = document.querySelector('.tesoura');

//indicador de escolhas
const frameEscolhas = document.querySelector('.escolhas');

//escolha voce
const imgPedraVoce = document.querySelector('.pedra1');
const imgPapelVoce = document.querySelector('.papel1');
const imgTesouraVoce = document.querySelector('.tesoura1');

//botao
const botao = document.querySelector('.button');

//variaveis do placar
let pontosVoce = 0;
let pontosMaquina = 0;


document.addEventListener('click', function(event){
    const evento = event.target;

    if (evento.classList.contains('pedra1')){
        imgPedraVoce.style.border = "solid 5px #0bbe0b";
        imgPapelVoce.style.border = "solid 2px #ffffff";
        imgTesouraVoce.style.border = "solid 2px #ffffff";
        
        const escolhaVoce = 'Pedra';
        const escolhaMaquina = escolhasMaquina(gerarNumeroAleatorio(3));

        frameEscolhas.innerHTML = `${escolhaVoce} x ${escolhaMaquina}`
        
        placar(regras(escolhaVoce, escolhaMaquina))
        
    };
    

    if (evento.classList.contains('papel1')){
        imgPedraVoce.style.border = "solid 2px #ffffff";
        imgPapelVoce.style.border = "solid 5px #0bbe0b";
        imgTesouraVoce.style.border = "solid 2px #ffffff";
        
        const escolhaVoce = 'Papel';
        const escolhaMaquina = escolhasMaquina(gerarNumeroAleatorio(3));

        frameEscolhas.innerHTML = `${escolhaVoce} x ${escolhaMaquina}`

        placar(regras(escolhaVoce, escolhaMaquina))
    };

    if (evento.classList.contains('tesoura1')){
        imgPedraVoce.style.border = "solid 2px #ffffff";
        imgPapelVoce.style.border = "solid 2px #ffffff";
        imgTesouraVoce.style.border = "solid 5px #0bbe0b";
        
        const escolhaVoce = 'Tesoura';
        const escolhaMaquina = escolhasMaquina(gerarNumeroAleatorio(3));

        frameEscolhas.innerHTML = `${escolhaVoce} x ${escolhaMaquina}`

        placar(regras(escolhaVoce, escolhaMaquina))
    };

    if (evento.classList.contains('button')){
        imgPedraVoce.style.border = "solid 2px #ffffff";
        imgPapelVoce.style.border = "solid 2px #ffffff";
        imgTesouraVoce.style.border = "solid 2px #ffffff";

        imgPedraMaquina.style.border = "solid 2px #ffffff";
        imgPapelMaquina.style.border = "solid 2px #ffffff";
        imgTesouraMaquina.style.border = "solid 2px #ffffff";

        pontosVoce = 0;
        pontosMaquina = 0;

        frameEscolhas.innerHTML = `Você x Maquina`
        frameGanhador.innerHTML = '';

        placarVoce.innerHTML = pontosVoce;
        placarMaquina.innerHTML = pontosVoce;

    };
    
})


//FUNÇÔES

function gerarNumeroAleatorio(n){
    const numero = Math.floor(Math.random() * n + 1);
    return numero;
}

function escolhasMaquina(numeroAleatorio){
    if (numeroAleatorio === 1){
        imgPedraMaquina.style.border = "solid 5px #ff0000";
        imgPapelMaquina.style.border = "solid 2px #ffffff";
        imgTesouraMaquina.style.border = "solid 2px #ffffff";
        return 'Pedra';
    };
    if (numeroAleatorio === 2){
        imgPedraMaquina.style.border = "solid 2px #ffffff";
        imgPapelMaquina.style.border = "solid 5px #ff0000";
        imgTesouraMaquina.style.border = "solid 2px #ffffff";
        return 'Papel';
    };
    if (numeroAleatorio === 3){
        imgPedraMaquina.style.border = "solid 2px #ffffff";
        imgPapelMaquina.style.border = "solid 2px #ffffff";
        imgTesouraMaquina.style.border = "solid 5px #ff0000";
        return 'Tesoura';
    };
}

function regras(escolhaVoce, escolhaMaquina){
    // 0 = Maquina Ganho.
    // 1 = voce Ganho.
    // 2 = Empate.
    if (escolhaVoce === escolhaMaquina) return 2;
    
    if (escolhaVoce === 'Pedra' && escolhaMaquina === 'Papel'){
        return 0;
    }
    else if (escolhaVoce === 'Pedra' && escolhaMaquina === 'Tesoura'){
        return 1;
    };

    if (escolhaVoce === 'Papel' && escolhaMaquina === 'Tesoura'){
        return 0;
    }
    else if (escolhaVoce === 'Papel' && escolhaMaquina === 'Pedra'){
        return 1;
    };

    if (escolhaVoce === 'Tesoura' && escolhaMaquina === 'Pedra'){
        return 0;
    }
    else if (escolhaVoce === 'Tesoura' && escolhaMaquina === 'Papel'){
        return 1;
    };

}

function placar(numero) {
    if (numero === 2){
        frameGanhador.innerHTML = 'EMPATE!';
        return;
    };

    if (numero === 1){
        pontosVoce++;
        placarVoce.innerHTML = pontosVoce;
        frameGanhador.innerHTML = 'VOCÊ GANHOU!';
        return;
    }
    if (numero === 0){
        pontosMaquina++;
        placarMaquina.innerHTML = pontosMaquina;
        frameGanhador.innerHTML = 'MAQUINA GANHOU!';
        return;
    }
}

