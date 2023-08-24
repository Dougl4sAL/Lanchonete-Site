export function add_valor_total_carrinho() {
    const carrinhoData = JSON.parse(localStorage.getItem('carrinho')) || []
    let valor_total_carrinho = document.querySelector('.valor-total')
    let itens_total_carrinho = document.querySelector('.total-itens')
    
    let valorAtual  = parseFloat(valor_total_carrinho.innerText.replace('R$', ''))
    let itensAtuais = parseInt(itens_total_carrinho.innerText)

    valorAtual  = 0
    itensAtuais = 0
    if(valor_total_carrinho && itens_total_carrinho) {

        carrinhoData.forEach((item) => {
            valorAtual += item.valor_total
            itensAtuais += item.quantidade
        })
        
        valor_total_carrinho.innerText = `R$ ${(valorAtual).toFixed(2).toString().replace('.', ',')}`
        itens_total_carrinho.innerText = `${itensAtuais} itens`
    } else {
        console.error("Os elementos 'valor_total' ou 'itens_total' não foram encontrados.")
    }
}

