// let i= 10
// while(i<10){
//     console.log (`o numero ${i} é menor do que 10`)
//     i+=1
// }
// if (i>10){
//     console.log(`o numero ${i} é maior do que 10`)
// }else{
//     console.log(`seus valores sao iguais`)
// }
//questao1//

// let numero1= 20
// let numero2= 10
// if(numero1==numero2){
//     let soma= numero1+numero2
//     console.log(`essa é seu resultado ${soma}`)
// }else{
//     let mult= numero1*numero2
//     console.log(`infezlimente seu numeros não são iguais, mas esse é o resultado da multiplicação: ${mult}`)
// }

//questao2//
// let salario_minimo = 1293
// let salario_usuario = 1200
// if(salario_minimo==salario_usuario){
//     console.log(`Você recebe exatamente um salario minimo`)
// }
// else if(salario_minimo>salario_usuario){
//     console.log(`Você recebe menos do que deveria!! Procure seus direitos!!!`)
// }
// else{
//     console.log(`Você recebe mais do que ${salario_minimo}!!!. Sua empresa esta contratando??`)
//     let calculo = salario_usuario/salario_minimo
//     console.log(`Você recebe ${calculo} salarios a mais!!!!`)
// }

const botao = document.getElementById('botao')
botao.addEventListener('click', function (){
    botao.style.backgroundColor = "blue";
})