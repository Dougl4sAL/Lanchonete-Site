const carrinhoData = JSON.parse(localStorage.getItem('carrinho')) || []
console.log(carrinhoData)

// Para limpar todo o armazenamento local
// localStorage.removeItem('carrinho')

let tabela = document.querySelector('.itens-tabela')
let valor_compra = document.querySelector('.valor-compra')

function criarItensTabela() {
    carrinhoData.forEach((item) => {

        let linha_tabela = document.createElement('tr')
        linha_tabela.classList.add('itens-compras')

        let iten_img = document.createElement('td')
        let imageCaminho = item.img.split('http://127.0.0.1:5500')[1]
        iten_img.innerHTML = `<img src="${imageCaminho}" alt="imagem do produto">`
        linha_tabela.appendChild(iten_img)


        let nome_linha = document.createElement('td')
        nome_linha.innerHTML = item.nome
        linha_tabela.appendChild(nome_linha)

        let valor_linha = document.createElement('td');
        valor_linha.innerHTML = 'R$ ' + item.valor.toFixed(2)
        linha_tabela.appendChild(valor_linha)

        let quantidade_linha = document.createElement('td')
        quantidade_linha.innerHTML = `x${item.quantidade}`
        linha_tabela.appendChild(quantidade_linha)

        let valor_total_linha = document.createElement('td')
        valor_total_linha.innerHTML = 'R$ ' + item.valor_total.toFixed(2)
        linha_tabela.appendChild(valor_total_linha)

        let excluir_linha = document.createElement('td')
        excluir_linha.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        linha_tabela.appendChild(excluir_linha)

        tabela.appendChild(linha_tabela)
    })
}

function valorTotalCompra() {
    let valor_total_compra = 0
    carrinhoData.forEach((item) => {
        valor_total_compra += item.valor_total
    })

    valor_compra.innerHTML = 'R$ ' + valor_total_compra.toFixed(2)
}

criarItensTabela()

valorTotalCompra()