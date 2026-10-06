document.querySelector('#btnArrayEstoque')
    .addEventListener('click', () => {
        const fornada = [
            { sabor: 'Mirtilo' , custo: 4.5, estoque: 8},
            { sabor: 'Chocolate' , custo: 3.2, estoque: 15},
            { sabor: 'Cítrico' , custo: 2.8, estoque: 10},
            { sabor: 'Maça e noz', custo: 5.8, estoque: 5}
        ];
        let res = document.querySelector('resArray');
        res.innerHTML = '<strong> 1. Estoque Atual </strong> <br>';
        for (let muffing of fornada){  
            res.innerHTML += `${muffing.sabor} - Disp: ${muffing.estoque}<br>`; 
         }

         const cardapio = fornada.map(muffin =>{
            return {sabor: muffin.sabor, preco: (muffin.custo * 1.5).toFixed(2)};
         });

         res,innerHTML += '<h4>Precificação com map</h4>';
         cardapio.forEach(item =>
                    res.innerHTML += '${item.sabor} - R$ ${item.preco}<br>');

       const relEstoque = fornada.filter(muffin => muffin.estoque < 10);
       res.innerHTML += '<h4> Alerta de estoque </h4>';
       relEstoque.forEach(item => res.innerHTML += `${item.sabor} - ${item.estoque}<br>`);

       const custoTotal = fornada.reduce((acumulador, muffin) => {
        return acumulador + (muffin.custo * muffin.estoque);
       },0)
       res.innerHTML += `<h4>Total:${custoTotal} </h4>`;
        
    });