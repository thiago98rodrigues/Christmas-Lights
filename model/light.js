function light(_id, _color) {
    this.id = _id;
    this.color = '#393053';
    this.mood = 'Solid';
    this.on = '0';
    this.anime;
    this.lightBefore;
    this.turnToOn = function(){
        this.on = '1'
        this.color = _color
        this.lightBefore = 'linear-gradient(165deg, #363062 70%, var(--color))'
        this.anime = 'bb var(--speed) alternate infinite ease-in-out'    
    }
    this.turnToOff = function(){
        this.on = '0'
        this.color = '#393053'
        this.lightBefore = '#363062'
        this.anime = 'none'
    }
}

function initLights(){
    var arr = []
    var protoLights;
    fetch("./data/lights.json").then((response)=>{
        response.json().then((dado)=>{
            dado.lights.map((li)=>{
                protoLights = new light(li.id, li.colorHex)
                arr.push(protoLights)
            })
        })
    })
    return arr
}

export var lightsList = initLights()