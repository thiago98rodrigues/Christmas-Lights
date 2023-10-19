//import {setLights} from "./start.js"

export function turnTo(number, lights){
    console.log(number)
    var lightsToOn = [...number]
    lightsToOn.forEach((element, index)=>{
        if(element == '1'){ 
            lights[index].turnToOn()       
        }else{ 
            lights[index].turnToOff()      
        }
        setLights(lights);
    })
}