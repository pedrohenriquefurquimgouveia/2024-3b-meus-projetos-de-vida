const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.aba-conteudo');

const contadores = document.querySelectorAll(".contador")

const tempoObjetivo01 = new Date("2024-04-31T00:00:00")
const tempoObjetivo02 = new Date("2024-04-31T00:00:00")
const tempoObjetivo03 = new Date("2024-04-31T00:00:00")
const tempoObjetivo04 = new Date("2024-04-31T00:00:00")

const tempos = [tempoObjetivo01, tempoObjetivo02, tempoObjetivo03, tempoObjetivo04];

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove('ativo')
            textos[j].classList.remove('ativo')
        }

        botoes[i].classList.add('ativo')
        textos[i].classList.add('ativo')
    }
}

function atualizaCronometro() {
   
    document.getElementById("dias"+i).textContent = calculaTempo(tempos[0])[0];
    document.getElementById("horas"+i).textContent = calculaTempo(tempos[0])[0];
    document.getElementById("min"+i).textContent = calculaTempo(tempos[0])[0];
    document.getElementById("seg"+i).textContent = calculaTempo(tempos[0])[0];
    for (let i = 0; i < tempos.length; i++) {
        //contadores[i].textContent = calculaTempo(tempos[i])
    }
}
function comecaCronometro(){
    atualizaCronometro()
    setInterval(atualizaCronometro, 1000)

}
comecaCronometro();




function calculaTempo(tempoObjetivo) {

    let tempoAtual = new Date()
    let tempoFinal = tempoObjetivo - tempoAtual

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dia = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

if(tempofinal > 0){
    return dia + " Dias " + horas + " Horas " + minutos + " Minutos " + segundos + " Segundos "
} else { return "prazo Finalizado"
    
}
}
