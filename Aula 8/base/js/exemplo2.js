const visorSenha = document.querySelector('#visorSenha');
const compSenha = document.querySelector('#compSenha');
const chkMaiusculas = document.querySelector('#chkMaiusculas'); 
const chkNumeros = document.querySelector('#chkNumeros'); 
const chkSimbolos = document.querySelector('#chkSimbolos'); 
const btnGerar = document.querySelector('#btnGerar');
const indicadorForca = document.querySelector('#indicadorForca');

const letrasMinusculas  = 'abcdefghijklmnopqrstuvwxyz';
const letrasMaisculas   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numeros = '0123456789';
const simbolos = '!@#$%ˆ&*()<>?/{}[]`˜';

btnGerar.addEventListener('click', function(){
    let permitidos = letrasMinusculas;
    let variedades = 1;
    if (chkMaiusculas.checked == true){
        permitidos += letrasMaisculas;
        variedades++;
    }
    if (chkSimbolos.checked){
        permitidos += simbolos;
        variedades++;
    }
    let tamanho = Number(compSenha.value);
    let senhaFinal = '';
    for (let i = 0; i < tamanho; i++){
        let indice = Math.round(Math.random() * permitidos.length);
        senhaFinal += permitidos[indice];
    }
    visorSenha.innerHTML = senhaFinal;
    if (tamanho >= 12 && variedades >= 3){
        indicadorForca.innerHTML = 'Senha Forte';
        indicadorForca.style.color = '#16a34a';
        }else if (tamanho >= 8 && variedades == 2){
            indicadorForca.innerHTML = 'Senha média';
            indicadorForca.style.color = '#ca8a04'
        } else{
            indicadorForca.innerHTML = 'Senha Fraca';
            indicadorForca.style.color = '#dc2626';
        }
});