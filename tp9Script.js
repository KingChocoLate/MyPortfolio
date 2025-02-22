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

function handleMouseOver() {
    document.getElementById("decrease").style.backgroundColor = 'yellow';
}

function handleMouseOut() {
    event.target.style.backgroundColor = '';
}

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