document.getElementById("btnCalcular").addEventListener("click", function() {
    let nome = document.getElementById("nome").value
    let tipo = document.getElementById("tipo").value
    let consumoMensal = parseFloat(document.getElementById("consumoMensal").value)

    let resultado = 0

    // abordagem 1
    // if (tipo == '1') {
    //     resultado = consumoMensal * 0.6
    // } else if (tipo == '2') {
    //     resultado = consumoMensal * 0.48
    // } else if (tipo == '3') {
    //     resultado = consumoMensal * 1.29
    // } else {
    //     alert('tipo de cliente inválido')
    //     return
    // }

    // abordagem 2
    switch (tipo) {
        case '1':
            resultado = consumoMensal * 0.6;
            break;
        case '2':
            resultado = consumoMensal * 0.48;
            break;
        case '3':
            resultado = consumoMensal * 1.29;
            break;
        default:
            alert('tipo de cliente inválido, escolha 1, 2 ou 3')
            return
    }

    document.getElementById('resultado').innerHTML =
        `O cliente ${nome} teve um consumo de ${consumoMensal} kw/h e sua fatura é: R$ ${resultado}`

    document.getElementById("nome").value = ''
    document.getElementById("tipo").value = '--'
    document.getElementById("consumoMensal").value = ''
})