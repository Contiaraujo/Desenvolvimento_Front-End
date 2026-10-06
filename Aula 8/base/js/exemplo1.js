const   base    =   document.querySelector('#numBase');
const   limite  =   document.querySelector('#numLimite');
const   botao   =   document.querySelector('#btnGerar');
const   result  =   document.querySelector('#resumoPares');
const   tabuada =   document.querySelector('#saidaTabuada');

botao.addEventListener('click', function(){
let n_base = Number(base.value);
let n_limite = Number(limite.value);
if (isNaN(n_base) || isNaN(n_limite) || n_limite <= 0){
tabuada.innerHTML = "<strong>Insira valores corretos</strong>";
return;
}
tabuada.innerHTML = "";
let contP = 0;
let contI = 0;
for (let i = 1; i <= n_limite; i++){
    let conta = n_base * i;
    if (conta % 2 == 0){
        contP++;
    } else {
        contI++;
    }
    tabuada.innerHTML += `${n_base} x ${i} = ${conta}<br>`;
}
});