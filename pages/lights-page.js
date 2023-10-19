export function page(lights){
    return(`<main class="main flex">
            <hgroup>
                <h1>Binary Christmas</h1>
            </hgroup> 
            <div class="container-lights" id="container-lights">`+lights+`</div>
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
}
