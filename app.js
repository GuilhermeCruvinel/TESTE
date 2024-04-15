alert(`ola mundo!`);
let numeroSecreto = 8;
console.log (`o numero secreto eh ${numeroSecreto}`);
let chute;
let tentativas = 1;
while(chute != numeroSecreto) { 
    chute=prompt(`escolha um numero de 1 a 10`);

    if(chute == numeroSecreto) {;
break;}
    else {
    if(chute > numeroSecreto) {alert(` O numero secredo e menor do que o seu ${chute}`);}
else{
    alert( `o numero secreto eh maior do que ${chute}`)
 }
tentativas++
}
}
if (tentativas>1){alert(`vc acertou o numero secreto com ${tentativas} tentativas`)
}else{alert(`vc acertou o numero secreto com ${tentativas} tentativa`);}