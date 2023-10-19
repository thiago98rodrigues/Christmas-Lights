import { elementFromHtlm } from "../services/createTemplate.js";
import {page} from "../pages/lights-page.js";

import {calcular} from "../services/formasCalcular.js";
import { lightsList } from "../model/light.js";
import {turnTo} from "../services/turnTo.js";


export function lightsController(){
    var template = elementFromHtlm(page('lights'))
    document.body.appendChild(template)
    var container = document.querySelector('#container-lights')
    console.log(lightsList.length)
    for(var index = 0; index <= lightsList.length-1; index++){
        
        if(document.querySelector('.light.l'+index) != null){
            console.log('lightsList')
            container.removeChild(document.querySelector('.light.l'+index));
        }
        var li = lightsList[index]
        var element = elementFromHtlm(`<div style="--color: `+li.color+`;  --lightbefore:`+li.lightBefore+`; animation:`+li.anime+`;" class="light l`+li.id+`">`+li.on+`</div>`)
        container.appendChild(element)
    }

    const resultFromConvertion =  document.querySelector('#resultFromConvertion');
    const numberToConverte = document.querySelector('#numberToConverte');
    const speedButton = document.querySelector('#speedUp');

    //turnToAll('off')

    document.querySelector('#off').addEventListener('click', function(){turnToAll('off')})
    document.querySelector('#on').addEventListener('click', function(){turnToAll('on')})

    speedButton.addEventListener('click', function(){speedButton.innerHTML = changeSpeed(speedButton.innerHTML)})

    numberToConverte.addEventListener('keyup', function(){
        if(/[^0-9]/g.test(numberToConverte.value)){
            numberToConverte.value = numberToConverte.value.replace(/[^0-9]/g, '')
            warningPopUp('Apenas Números!');
        }else if(numberToConverte.value > 255){
            //warningPopUp('Número maior que 255!');
            numberToConverte.value = 255
        }
        resultFromConvertion.value = calcular('dec', numberToConverte.value)[0]
        //turnTo(calcular('dec', numberToConverte.value)[0], lights)
    })

    resultFromConvertion.addEventListener('keyup', function(){ 
        if(/[^0-1]/g.test(resultFromConvertion.value)){
            resultFromConvertion.value = resultFromConvertion.value.replace(/[^0-1]/g, '')
            warningPopUp('Apenas 0 e 1!');
        }
        numberToConverte.value = calcular('bin', resultFromConvertion.value)[1]
        //turnTo(calcular('bin', resultFromConvertion.value)[0], lights)
    })

    function turnToAll(option){
        if(option == 'on'){
            numberToConverte.value = 255
        }else{
            numberToConverte.value = 0
        }
        resultFromConvertion.value = calcular('dec', numberToConverte.value)[0]
        turnTo(calcular('dec', numberToConverte.value)[0], lights)
    }

    function changeSpeed(speedNow){
        var result;
        var speed;
        if(speedNow == '0'){
            speed = speeds[0]
            result = 'x1'
        }else{
            var indexSpeed = parseInt(speedNow.slice(-1))-1;
            indexSpeed+1 > speeds.length-1 ? indexSpeed = 0 : indexSpeed += 1
            speed = speeds[indexSpeed]
            result = 'x'+(indexSpeed+1).toString()
        }
        document.body.style.setProperty('--speed', speed+'s');
        return result
    }
}