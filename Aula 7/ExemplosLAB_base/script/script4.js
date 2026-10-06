let animacao ; 
document.querySelector('#btnJogarDado')
    .addEventListener('click', ()=>{
        const palpite = Number(document.querySelector('#inputPalpite') .value);
        const resDado = document.querySelector('#resDado');
        const dadoVisual = document.querySelector('#dadoVisual');
        const btnJogar = document.querySelector('#btnJogarDado');

        if (isNaN(palpite) || palpite < 1 || palpite > 6){
            alert('Digite corretamente');
            return;
        }
        btnJogar.disabled = true
        resDado.innerHTML = 'Sorteado ... boa sorte';
        clearInterval(animacao);
        animacao = setInterval(()=>{
            let valor = Math.floor(Math.random() * 6) + 1;
            dadoVisual.innerHTML = valor;
        }, 10);

        setTimeout(() => {
            clearInterval(animacao);
            let valor = Math.floor(Math.random() * 6) + 1;
            if (palpite == valor){
                resDado.innerHTML = 'Parabéns você acertou';}
                else{
                    resDado.innerHTML = 'Errou!'
                }
                btnJogar.disabled = false;
            },3000)
        })