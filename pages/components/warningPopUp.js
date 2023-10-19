import {elementFromHtlm} from "../services/createTemplate.js";

export function warningPopUp(tile){
    if(document.querySelector('#advert') != null){
        document.querySelector('#advert').remove()
    }
    var template = elementFromHtlm(`
        <div class="warningScreen flex" id="advert">
            <span id="closeAdvert">×</span>
            <h2>`+tile+`</h2>
        </div>`)
    document.body.appendChild(template)
    document.querySelector('#closeAdvert').addEventListener('click', ()=>{
        document.querySelector('#advert').remove()
    })
    
}