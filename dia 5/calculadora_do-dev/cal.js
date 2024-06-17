let num1= parseInt (prompt("Digite o primeiro número"));
let num2= parseInt (prompt("Digite o segundo número"));
let operação
let oper= parseInt (prompt('escolha a operação que deseja realizar'
    + "1 = +; 2 = -; 3 = *; 4 = / "))

//CRIANDO SWTCHCASE
switch (oper){
    case 1:
        operação= num1 + num2
        console.log('O valor da operação é = '+ operação )
        break;
    case 2:
        operação= num1 - num2
        console.log ('O valor da operação é = '+ operação)
        break;
    case 3:
        operação= num1 * num2
        console.log ('O valor da operação é = '+ operação)
        break;
    case 4:
        operação= num1 / num2
        console.log ('O valor da operação é = '+ operação)
        break;
    default:
        console.log('Tente novamente')
        break;
}
