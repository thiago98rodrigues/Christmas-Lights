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
    return result
}