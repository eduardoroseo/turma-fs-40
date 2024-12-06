async function listarProdutos() {
  try {
    const response = 
      await fetch("http://localhost:3000/products?_sort=id")

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

async function criarProduto(product) {
  try {
    const params = {
      method: "POST",
      body: JSON.stringify(product),
      headers: { //instrução não obrigatório
        "Content-Type": "application/json"
      }
    }
    
    await fetch("http://localhost:3000/products", params)

    listarProdutos()
    fecharModal()
    limparForm()

    alert("Produto cadastrado com sucesso!")
  } catch (e) {
    console.log(e)
    alert("erro ao salvar o produto")
  }
}

function fecharModal() {
  const modalElement = document.getElementById("form-produto")
  const modal = bootstrap.Modal.getInstance(modalElement)

  modal.hide()
}

function limparForm() {
  document.getElementById("title").value = ""
  document.getElementById("price").value = ""
  document.getElementById("category").value = ""
  document.getElementById("image").value = ""
  document.getElementById("rating").value = ""
}

document.addEventListener("DOMContentLoaded", function() {
  listarProdutos()

  document.getElementById("form-new-product").onsubmit = async (e) => {
    e.preventDefault()

    const product = {
      title: document.getElementById("title").value,
      price: document.getElementById("price").value,
      category: document.getElementById("category").value,
      image: document.getElementById("image").value,
      rating: {
        rate: document.getElementById("rating").value
      },
    }

    criarProduto(product)
  }
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