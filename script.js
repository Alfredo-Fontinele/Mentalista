let numeroSecreto = parseInt(Math.random() * 11);
let tentativas = 4;

function Chutar() {
    let minimo = 0;
    let maximo = 10;
    let chute = parseInt(document.getElementById("valor").value);

    let resultado = document.getElementById("resultado");
    resultado.style.visibility = "visible";

    do {

        if (tentativas == 0) {
            resultado.innerHTML = `Suas tentativas acabaram<br>O número secreto era: ${numeroSecreto}`;
            break;
        }

        else {

            if (chute == numeroSecreto) {
                resultado.innerHTML = `Tentativas: ${tentativas}<br>Número Informado: ${chute}<br>Parabéns, você adivinhou o número corretamente`;
                break;
            }

            else if (chute > maximo) {
                resultado.innerHTML = `Tentativas: ${tentativas}<br>Número Informado: ${chute}<br>O número informado está acima do limite`;
                tentativas--;
                break;
            }

            else if (chute < minimo) {
                resultado.innerHTML = `Tentativas: ${tentativas}<br>Número Informado: ${chute}<br>O número informado está abaixo do limite`;
                tentativas--;
                break;
            }

            else {
                resultado.innerHTML = `Tentativas: ${tentativas}<br>Número Informado: ${chute}<br>Número Incorreto. Tente de novo`;
                tentativas--;
                break;
            }

        }
    } while (tentativas !== 0);
}

function Recarregar() {
    document.location.reload(true);
}