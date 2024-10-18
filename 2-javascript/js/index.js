function calcularMedia() {
  let nome = document.getElementById("nome-aluno").value;
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let nota3 = document.getElementById("nota3").value;

  nota1 = parseFloat(nota1);
  nota2 = parseFloat(nota2);
  nota3 = parseFloat(nota3);

  let media = (nota1 + nota2 + nota3) / 3;

  document.getElementById("resultado").innerText =
     `A média do aluno ${nome} é ${media.toFixed(1)}`;
}
