//Ex01
class Counter{
    Value = 0;
    constructor(){
        document.getElementById("kdmv").innerHTML = this.Value;
    };
    Decrease(){
        this.Value--;
        document.getElementById("kdmv").innerHTML = this.Value;
    }
    Reset(){
        this.Value = 0;
        document.getElementById("kdmv").innerHTML = this.Value;
    }
    Increase(){
        this.Value++;
        document.getElementById("kdmv").innerHTML = this.Value;
    }
}

const counter = new Counter();
function Decrease(){
    counter.Decrease();
}
function Reset(){  
    counter.Reset();
}
function Increase(){
    counter.Increase();
}

function handleMouseOver(event) {
    event.target.style.backgroundColor = 'gray';
}

function handleMouseOut(event) {
    event.target.style.backgroundColor = '';
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('decrease').addEventListener('mouseover', handleMouseOver);
    document.getElementById('decrease').addEventListener('mouseout', handleMouseOut);
    document.getElementById('increase').addEventListener('mouseover', handleMouseOver);
    document.getElementById('increase').addEventListener('mouseout', handleMouseOut);
    document.getElementById('reset').addEventListener('mouseover', handleMouseOver);
    document.getElementById('reset').addEventListener('mouseout', handleMouseOut);
    d
});
//Ex02

class Color{
    colorType = '';
    records = [];

    constructor(type){
        this.colorType = type;
    }

    generate(){

    }
    getRandomNumber(){
        
    }
    getRecords(){

    }
    reset(){
        
    }
}