let mais_produto = document.querySelectorAll('.mais-produto')
let menos_produto = document.querySelectorAll('.menos-produto')
let quantidades = Array(mais_produto.length).fill(0); // inicializa o array com zeros

// Cria um array(lista) contendo o valor da quantidade de cada card separado
let add_carrinho = document.querySelectorAll('.add-carrinho')

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
        let quantidade = document.querySelectorAll('.quantidade')[index]

        quantidades[index] = 0
        quantidade.innerHTML = quantidades[index]
    })
})