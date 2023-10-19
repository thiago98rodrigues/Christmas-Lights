import {formasCalcular} from "../services/formasCalcular.js";
import {popUp} from "../components/popUp.js";
import {elementFromHtlm} from "../services/createTemplate.js";

const color = [
    ['orange', '#FE6244'],
    ['purple', '#7149C6'],
    ['red', '#FC2947'],
    ['ciane', '#00ffff'],
    ['yellow', '#FFCD38'],
    ['green', '#28FFBF'],
    ['pink', '#FF008E'],
    ['blue', '#0F00FF']
    ];
    

const speeds = [2, 1.50, 0.75, 0.40, 0.15];
const moods = ['Solid', 'Rainbow']

const lightInit = {
    twinkleSpeed:speeds[0],
    transitionSpeed:0,
    mood:moods[0],
}

const lpopUp = {
    open:(e)=>{
        var index = parseInt(e.target.className.slice(-1))
        var elPopUp = elementFromHtlm(popUp(color[index][1]))
        console.log(elPopUp)
        document.body.appendChild(elPopUp)
        document.querySelector('.popUp-warraped').addEventListener('click', lpopUp.close)
    },
    close:(e)=>{
        if (e.target == document.querySelector('.popUp-warraped')){
            document.querySelector('.popUp-warraped').remove();
        } 
    }
}


window.addEventListener('load', function(){
    start();

    const resultFromConvertion =  document.querySelector('#resultFromConvertion')
    const numberToConverte = document.querySelector('#numberToConverte');
    const speedButton = document.querySelector('#speedUp');

    document.querySelector('#off').addEventListener('click', function(){ changeAll('off')})
    document.querySelector('#on').addEventListener('click', function(){changeAll('on')})

    speedButton.addEventListener('click', function(){speedButton.innerHTML = changeSpeed(lightInit.twinkleSpeed)})
    numberToConverte.addEventListener('keyup', function(){ change('dec')})
    resultFromConvertion.addEventListener('keyup', function(){ change('bin')})
})

function start(){
    var template = elementFromHtlm(`<main class="main flex">
            <hgroup>
                <h1>Binary Christmas</h1>
            </hgroup> 
            <div class="container-lights" id="container-lights">
            </div>
            <div class="controlles flex">
                <div>
                    <button class="btn" id="on">on</button>
                    <button class="btn" id="off">off</button>
                    <button class="btn" id="speedUp">x1</button>
                </div>
                <div class="input-area flex">
                    <div class="input-container flex">
                        <label>Dec: </label><input type="text" class="number-input" id="numberToConverte">
                    </div>
                    <div class="icon-change">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                        </svg>
                    </div>
                    <div class="input-container flex">
                        <label>Bin: </label><input type="text" maxlength="8" class="number-input" id="resultFromConvertion">
                    </div>     
                </div>
            </div>
        </main>`)
    document.body.appendChild(template)
    for(var i = 0; i <= color.length-1; i++){
        var el = elementFromHtlm(`<div class="light l`+i+`"></div>`)
        document.querySelector('#container-lights').appendChild(el)
        document.querySelector('.light.l'+i).addEventListener('click', lpopUp.open)
    }
    changeAll('off');
}

function calculo(estate){
    var number;
    var resultado;
    if(estate == 'dec'){
        numberToConverte.value = numberToConverte.value.replace(/[^0-9]/g, '')
        number = parseInt(numberToConverte.value)
        if(number <= 0){
            resultado = '0'
        }
        else if(number > 255){
            numberToConverte.value = 255
            resultado = '11111111'
        }else{ 
            var calcy = formasCalcular.decToBin(number)
            resultado = calcy.toString()
        }    
    }else{
        resultFromConvertion.value = resultFromConvertion.value.replace(/[^0-1]/g, '')
        var st = (resultFromConvertion.value).toString()
        number = calcForm.binToDec(st)
        numberToConverte.value = number
        resultado = st
    }
    resultFromConvertion.value = resultado;
    return resultado.padStart(8, "0");
}

function changeSpeed(speed){
    if(speed == 0){
        lightInit.twinkleSpeed = speeds[0]
        return 'x1'
    }else{
        var indexSpeed = speeds.findIndex((element)=> element == speed);
        indexSpeed+1 > speeds.length-1 ? indexSpeed = 0 : indexSpeed += 1
        lightInit.twinkleSpeed = speeds[indexSpeed]
        document.body.style.setProperty('--speed', lightInit.twinkleSpeed+'s');
        return 'x'+(indexSpeed+1).toString()
    }
}

function change(estate){
    var lightsToOn = [...calculo(estate)]
    var lights = [...document.querySelectorAll('.light')]
    lightsToOn.forEach((element, index, array)=>{
        var light = lights[index]
        if(element == '1'){ 
            light.innerHTML = '1'
            light.style.setProperty('--color', color[index][1].toString())
            light.style.setProperty('--lightbefore', 'linear-gradient(165deg, #363062 70%, var(--color))');
            light.style.animation = 'bb var(--speed) alternate infinite ease-in-out'
        }else{    
            light.removeAttribute("style");
            light.innerHTML = '0'           
        }     
    })
}

export function changeAll(estate){
    if(estate == 'on'){
        numberToConverte.value = 255
        change('dec');
    }else{
        numberToConverte.value = 0
        change('dec');
    }       
}