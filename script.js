let mais_produto = document.querySelectorAll('.mais-produto')
let menos_produto = document.querySelectorAll('.menos-produto')
let quantidades = Array(mais_produto.length).fill(0); // inicializa o array com zeros
let valores_produtos = document.querySelectorAll('.valor-produto')
let valor_total = document.querySelector('.valor-total')
let total_itens = document.querySelector('.total-itens')

// Cria um array(lista) contendo o valor da quantidade de cada card separado
let add_carrinho = document.querySelectorAll('.add-carrinho')

let carrinho = []

valor_total.addEventListener('click', add_valor_total_carrinho)

function add_valor_total_carrinho(quantidade, valor) {

    let valorAtual = parseFloat(valor_total.innerText.replace('R$', ''))
    let itensAtuais = parseInt(total_itens.innerText)

    valor_total.innerText = `R$ ${(valorAtual + quantidade * valor).toFixed(2)}`
    total_itens.innerText = `${itensAtuais + quantidade} itens`
}

// selectorAll cria uma lista com todos os nomes, por isso precisa usar o forEach
// pra varrer todos e saber qual foi clicado passando o index dele
mais_produto.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let quantidade = document.querySelectorAll('.quantidade')[index]
        quantidades[index] += 1
        quantidade.innerHTML = quantidades[index]
    })
})

menos_produto.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let quantidade = document.querySelectorAll('.quantidade')[index]
        if (quantidades[index] > 0) {
            quantidades[index] -= 1
            quantidade.innerHTML = quantidades[index]
        }
    })
})

add_carrinho.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let quantidade = quantidades[index]
        if (quantidade > 0) {

            let img = document.querySelectorAll('.card-produto img')[index].src
            let nome = document.querySelectorAll('.nome-produto')[index].innerText
            let valor = parseFloat(valores_produtos[index].innerText.replace('R$', '')) // valor do produto
            let valor_total = valor * quantidade

            let produto = {
                img        : img,
                nome       : nome,
                quantidade : quantidade,
                valor      : valor,
                valor_total: valor_total
            };

            carrinho.push(produto)
            // console.log(`O nome: ${carrinho[0].nome}, a quantidade: ${carrinho[0].quantidade} e o valor: ${carrinho[0].valor}`)
            add_valor_total_carrinho(quantidade, valor)

            quantidades[index] = 0
            document.querySelectorAll('.quantidade')[index].innerText = '0' // Reseta o valor exibido na tela
        }
    });
});