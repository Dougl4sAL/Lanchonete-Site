import { add_valor_total_carrinho } from './scriptTotalCarrinho.js'

document.addEventListener("DOMContentLoaded", function () {
    const carrinhoData = JSON.parse(localStorage.getItem('carrinho')) || []
    console.log(carrinhoData)

    // Para limpar todo o armazenamento local
    // localStorage.removeItem('carrinho')

    let tabela = document.querySelector('.itens-tabela')
    let valor_compra = document.querySelector('.valor-compra')
    let msg_sem_produto = document.querySelector('.msg-sem-produto-container')
    let valor_total_compra = 0

    function criarItensTabela() {
        carrinhoData.forEach((item) => {
            let linha_tabela = document.createElement('tr')
            linha_tabela.classList.add('itens-compras')

            let item_img = document.createElement('td')
            let imageCaminho = item.img.split('http://127.0.0.1:5500')[1]
            item_img.innerHTML = `<img src="${imageCaminho}" alt="imagem do produto">`
            linha_tabela.appendChild(item_img)

            let nome_linha = document.createElement('td')
            nome_linha.innerHTML = item.nome
            linha_tabela.appendChild(nome_linha)

            let valor_linha = document.createElement('td')
            valor_linha.innerHTML = 'R$ ' + item.valor.toFixed(2).toString().replace('.', ',')
            linha_tabela.appendChild(valor_linha)

            let quantidade_linha = document.createElement('td')
            quantidade_linha.innerHTML = `x${item.quantidade}`
            linha_tabela.appendChild(quantidade_linha)

            let valor_total_linha = document.createElement('td')
            valor_total_linha.innerHTML = 'R$ ' + item.valor_total.toFixed(2).toString().replace('.', ',')
            linha_tabela.appendChild(valor_total_linha)

            let excluir_linha = document.createElement('td')
            let button_excluir = document.createElement('button')
            excluir_linha.appendChild(button_excluir)
            button_excluir.classList.add('excluir-linha')
            button_excluir.innerHTML = '<i class="fa-solid fa-xmark"></i>'
            linha_tabela.appendChild(excluir_linha)

            tabela.appendChild(linha_tabela)

        })
    }

    function valorTotalCompra() {
        carrinhoData.forEach((item) => {
            valor_total_compra += item.valor_total
        })

        valor_compra.innerHTML = 'R$ ' + valor_total_compra.toFixed(2).toString().replace('.', ',')
    }

    tabela.addEventListener('click', function (event) {
        // se o evento que disparou contém a class excluir-linha
        if (event.target.classList.contains('excluir-linha')) {

            let tr = event.target.closest('.itens-compras')

            if (tr) {
                // encontrar item no carrinhoData usando algum identificador, como nome do produto
                let nomeProduto = tr.querySelector('td:nth-child(2)').innerText

                let item = carrinhoData.find(item => item.nome === nomeProduto)

                if (item) {
                    valor_total_compra -= item.valor_total
                    valor_compra.innerHTML = `R$ ${valor_total_compra}`
                    let index = carrinhoData.indexOf(item)
                    if (index > -1) {
                        carrinhoData.splice(index, 1)
                    }
                }
                // Atualiza o localStorage depois de remover o produto do array
                localStorage.setItem('carrinho', JSON.stringify(carrinhoData))
                escondeInformacoes()
                // exclui a linha da tabela
                tr.remove()
            }
        }
    })

    function escondeInformacoes() {
        // Se carrinhoData for não nulo e tiver pelo menos um item
        // True e False garante q vai remover e add a classList hide
        if (carrinhoData && carrinhoData.length > 0) {
            msg_sem_produto.classList.toggle('hide', true)
            // Esconde a mensagem "sem produto"
            tabela.classList.toggle('hide', false)
            // Mostra a tabela
        } else {
            tabela.classList.toggle('hide', true)
            // Esconde a tabela
            msg_sem_produto.classList.toggle('hide', false)
            // Mostra a mensagem "sem produto"
        }

    }

    add_valor_total_carrinho()
    escondeInformacoes()
    criarItensTabela()
    valorTotalCompra()
})