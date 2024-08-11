
let input = document.getElementById("number")

let saida = document.getElementById("saida")

let button = document.querySelector("button")




function update(){
   // covertendo o número.

    let input_number = parseInt(input.value) //A ORDEM É IMPORTATISSIMA não coloque essa let fora da função. pois ela fara a conversão após apertar o número colocando fora o navegador tentará fazer tudo ao mesmo tempo e no fim dando erro.

    let divisores = 0

    // verificando quantos divisores tem.

    if (input_number >= 2){
        for(contador = 1; contador <= input_number; contador++){
            if(input_number % contador == 0 ){
                divisores++
            }

            //chegando a 3 divisores ele sai da estrutura for.

            if (divisores === 3){
                break
            }
    }   

} else {
    divisores = 3 //Forçando a variavél divisores caso o número for menor 2.
}

txt(divisores)
}


function txt(divisor_qtd){

    
    // condição para a saber qual texto será exibido; condição ternária foi utilizada.

    let resultado = divisor_qtd == 2?  `<p id= resultado>O número <span class=destaque><strong><em>é primo.</em></strong></span></p>` : `<p id=resultado>O número <span class=destaque><strong><em>não é primo</span></em><strong>.</p>`

    saida.innerHTML = resultado

}

button.addEventListener('click', update) //colocando um eventlistener.