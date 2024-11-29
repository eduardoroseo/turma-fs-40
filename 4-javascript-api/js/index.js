async function listarProdutos() {
  try {
    const response = 
      await fetch("https://fakestoreapi.com/products")

    const products = await response.json()

    const productsHtml = products.map(product => {
      return `
        <tr>
          <td>${product.id}</td>
          <td>${product.title}</td>
          <td>${product.price}</td>
          <td>${product.category}</td>
          <td>
            <img 
              src="${product.image}"
              alt="${product.title}"
              width="100px"
              height="100px" />
          </td>
          <td>${product.rating.rate}</td>
        </tr>
      `
    });

    document.getElementById("lista-produtos").innerHTML = productsHtml.join("")

  } catch (e) {
    console.log(e.message)
    console.log("deu ruim")
    return
  }
  console.log("FIM DA FUNÇÃO")
}

document.addEventListener("DOMContentLoaded", function() {
  listarProdutos()
})








// function listarProdutos() {
//   fetch("https://fakestoreai.com/products")
//     .then(response => response.json())
//     .then(products => {
//       // console.log(products)
//       console.log("CARREGOU OS PRODUTOS")
//     })
//     .catch(() => {
//       console.log("deu ruim")
//     })

//   console.log("FIM DA FUNÇÃO")
// }