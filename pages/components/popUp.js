export function popUp(color){
   return (`
    <div class="popUp-warraped flex">
        <div class="popUp flex">
            <div style="--color:`+color+` " class="proto-light"></div>
            <div class="inputs-container">
                <div class="input-container flex">
                    <label>`+color+`</label>
                    <input type="color" class="number-input" name="cor" id="" value="`+color+`">
                </div>
                <div class="input-container flex">
                    <label>Radius: </label><input type="text" class="number-input" id="numberToConverte">
                </div>
            </div>
        </div>
    </div>`)
}