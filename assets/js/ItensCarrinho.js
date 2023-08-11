import { carrinho } from "./script.js"

let tabela = document.querySelector('.itens-tabela')

function criarItensTabela() {
    console.log(carrinho)

    let linha_tabela = document.createElement('tr')
    linha_tabela.classList.add('itens-compras')

    let iten_img = document.createElement('td')
    iten_img.innerHTML = `<img src="/assets/images/Fotos Hamburguer/lanche-1.png" alt="">`
    linha_tabela.appendChild(iten_img)

    let nome_linha = document.createElement('td')
    nome_linha.innerHTML = `Dublo X-burguer`
    linha_tabela.appendChild(nome_linha)

    let valor_linha = document.createElement('td')
    valor_linha.innerHTML = `R$ 92,00`
    linha_tabela.appendChild(valor_linha)

    let quantidade_linha = document.createElement('td')
    quantidade_linha.innerHTML = `x10`
    linha_tabela.appendChild(quantidade_linha)

    let valor_total_linha = document.createElement('td')
    valor_total_linha.innerHTML = `R$ 44,00`
    linha_tabela.appendChild(valor_total_linha)

    let excluir_linha = document.createElement('td')
    excluir_linha.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    linha_tabela.appendChild(excluir_linha)

    tabela.appendChild(linha_tabela)
}

document.addEventListener("DOMContentLoaded", function() {
    criarItensTabela()
})