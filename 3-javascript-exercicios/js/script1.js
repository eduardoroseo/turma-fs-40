document.getElementById("btnCalcular").addEventListener('click', function() {
    let numero1 = parseFloat(document.getElementById('numero1').value)
    let numero2 = parseFloat(document.getElementById('numero2').value)

    let resultado = numero1 + numero2

    document.getElementById('resultado').innerHTML = 
        `O resultado da soma é: <strong>${resultado}</strong>.`

    document.getElementById('numero1').value = ''
    document.getElementById('numero2').value = ''
})