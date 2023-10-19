const formasCalcular = {
    binToDec: (number)=>{
        var numberArray = [...number]
        var result = 0;
        numberArray.forEach(function (e, index, array){
            result = result + parseInt(e) * Math.pow(2, (array.length - index)-1);
        })
        return result;
    },

    decToBin: (number)=>{
        var result = '';
        for(var i = number; i > 0; i = Math.trunc(i/2)){
            result = i%2+''+ result
        }
        return result;
    },
}

export function calcular(option, number){
    var resultado;
    if(option == 'dec'){
        var num = parseInt(number)
        resultado = formasCalcular.decToBin(num)
    }else{
        var st = String(number)
        number = parseInt(formasCalcular.binToDec(st))
        resultado = st
    }
    resultado = String(resultado)
    return [resultado.padStart(8, "0"), number];
}