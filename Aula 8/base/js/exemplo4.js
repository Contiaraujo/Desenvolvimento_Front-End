const campoProduto = document.querySelector('#campoProduto');
const btnAdicionar = document.querySelector('#btnAdicionar');
const listaElementos = document.querySelector('#listaElementos');
const resumoCarrinho = document.querySelector('#resumoCarrinho');
const btnLimpar = document.querySelector('#btnLimpar');

const produtos = [];

btnAdicionar.addEventListener('click', () => {
    const produto = campoProduto.value.trim();
    if (produto !== '') {
        produtos.push(produto);
        atualizarLista();
        campoProduto.value = '';
    }
});
