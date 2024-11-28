function consultarCEP() {
  const id = document.getElementById('cep').value

  fetch(`http://localhost:3000/alunos/${id}`)
    .then((response) => response.json())
    .then((endereco) => {
      document.getElementById("resultado").innerHTML = 
      `
        <ul>
          <li>ID: ${endereco.id}</li>
          <li>Nome: ${endereco.nome}</li>
          <li>Idade: ${endereco.idade}</li>
        </ul>
      `
    });
}
