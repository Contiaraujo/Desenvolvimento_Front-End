document.querySelector('#btnRadar')
    .addEventListener('click', function(){
       let limite = Number(document.querySelector('#inputLimite').value); 

       let velocidade = Number(document.querySelector('#inputVelocidade').value);
       
       let res = document.querySelector('#resRadar');

       if (limite <= 0 || velocidade < 0){
        res.innerHTML = 'Erro insira valores corretos';
        return;
       }
       if(velocidade <= limite){
        res.innerHTML = '<strong> Boa Viagem! </strong>';
       }else{
        let excesso = velocidade - limite;
        let por = Math.round((excesso / limite) * 100);
        if (por <= 20){
            res.innerHTML = 'Multa média!';
        }else if (por <= 50){
            res.innerHTML = 'Grave!';
        }else{
            res.innerHTML = 'Gravissíma!';
        }
    }
});