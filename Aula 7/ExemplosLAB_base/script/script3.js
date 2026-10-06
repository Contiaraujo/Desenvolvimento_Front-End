const cartao        = document.querySelector('#cartao');
const cor           = document.querySelector('#cor');
const tamanho       = document.querySelector('#tamanho');
const destaque      = document.querySelector('#destaque');
const visibilidade  = document.querySelector('#visibilidade');

function exibirEstado(){
    document.querySelector('#estado').textContent =
    `cor: $(getcomputedStyle(cartao).color}\n
    Classes: $(cartao.className || "nenhuma"}\n
    Oculto: ${cartao.hidden}`;
}

cor.addEventListener('input', () => {
cartao.style.color = cor.value;
exibirEstado();
});

tamanho.addEventListener('input', ()=>{
    cartao.style.fontSize = `${tamanho.value}px`;
    document.querySelector('#tamanhoTexto').textContent = `${tamanho.value}px`;
})

destaque.addEventListener('click', ()=>{
    cartao.classList.toggle('destaque');
    exibirEstado();
})

visibilidade.addEventListener('click', ()=>{
    cartao.hidden = !cartao.hidden;
})

document.querySelector('#restaurar').addEventListener('click', ()=>{
    cartao.removeAttribute('style');
    cartao.classList.remove('destaque');
    cartao.hidden = false;
    tamanho.value = '24';
    document.querySelector('#tamanhoTexto').textContent = '24 px';
    visibilidade.textContent = 'ocultar cartão';
    exibirEstado();
})