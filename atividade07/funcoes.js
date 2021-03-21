////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // const nome = prompt ("Informe seu nome:");
    // let ano = prompt ("Informe seu ano de nascimento:");
    // let aposentadoria = calcularIdade(ano);

    // if (aposentadoria >= 65 ) {
    //     alert(`Você já tem idade para se aposentar, ${nome}`);
    //     console.log(`Você já tem idade para se aposentar, ${nome}`);
    // }
    // else{
    //     alert(`Você ainda não tem idade para se aposentar, ${nome}`);
    //     console.log(`Você ainda não tem idade para se aposentar, ${nome}`);   
    // }

    // function calcularIdade(ano) {
    // return 2021 - ano;
    // }

//Prática 6

    let restaurantes = [];
    let contas = [];
    let gorjetas = [];

    for(let i =0; i<3; i++){
        const restaurante = prompt("Informe os nomes dos restaurantes:");
        restaurantes.push(restaurante);
        const contx = prompt("Informe o valor das contas:");
        const conta = parseFloat(contx);
        contas.push(conta);
        gorjetas[i] = gorjeta(parseFloat(contas[i])).toFixed(2);

    }

    imprimir(restaurantes, contas, gorjetas);



    function gorjeta(conta) {

        if (conta < 50) {
            return (20 /100) * conta;

           
        }else if (conta >= 50 && conta <= 200) {
            return (15 / 100) * conta; 
            
           
        }else{
            return (10 / 100) * conta;

        }

    }

    function imprimir(restaurantes, contas, gorjetas){

        for (let i = 0; i < 3; i++) {
            console.log(`Restaurante ${restaurantes[i]} - [Conta: R$ ${contas[i]} | Gorjeta: R$ ${gorjetas[i]} | 
            Total: R$ ${parseFloat(gorjetas[i]) + parseFloat(contas[i])}`); 
            alert(`Restaurante ${restaurantes[i]} - [Valor: R$ ${contas[i]} | Gorjeta: R$ ${gorjetas[i]} | 
            Total: R$ ${parseFloat(gorjetas[i]) + parseFloat(contas[i])}`);
        }   


    }




////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  