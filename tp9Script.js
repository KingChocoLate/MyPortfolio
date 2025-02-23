//Ex01
class Counter{
    Value = 0;
    constructor(){
        document.getElementById('counter').innerHTML = this.Value;
    };
    Decrease(){
        this.Value--;
        document.getElementById('counter').innerHTML = this.Value;
    }
    Reset(){
        this.Value = 0;
        document.getElementById('counter').innerHTML = this.Value;
    }
    Increase(){
        this.Value++;
        document.getElementById('counter').innerHTML = this.Value;
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
    if(document.getElementById('decrease')){
        document.getElementById('decrease').addEventListener('mouseover', handleMouseOver);
        document.getElementById('decrease').addEventListener('mouseout', handleMouseOut);
    }
    if(document.getElementById('increase')){
        document.getElementById('increase').addEventListener('mouseover', handleMouseOver);
        document.getElementById('increase').addEventListener('mouseout', handleMouseOut);
    }
    if(document.getElementById('reset')){
        document.getElementById('reset').addEventListener('mouseover', handleMouseOver);
        document.getElementById('reset').addEventListener('mouseout', handleMouseOut);
    }   
});
//Ex02

class Color{
    colorType = '';
    records = [];

    constructor(type){
        this.colorType = document.getElementById(type).innerHTML;      
    }

    generate(){
        this.colorType = this.getRandomNumber();
        document.getElementById('display_hexa').innerHTML = this.colorType;
        document.getElementById('display_hexa').style.color = this.colorType;
        document.getElementById('display_color').style.backgroundColor = this.colorType;
        document.getElementById('display_color1').style.backgroundColor = this.colorType;
    }
    getRandomNumber(){
        return this.records[Math.floor(Math.random() * this.records.length)];
    }
    getRecords(){
        for(let i=0; i<8; i++){
            this.records[i] = document.getElementById('color' + (i+1)).innerHTML;
        }
        
    }
    reset(){
        this.colorType = '#2336FB';
        document.getElementById('display_hexa').innerHTML = this.colorType;
        document.getElementById('display_hexa').style.color = this.colorType;
        document.getElementById('display_color').style.backgroundColor = this.colorType;
        document.getElementById('display_color1').style.backgroundColor = this.colorType;
    }
}

const color = new Color('display_color');
function generate(){
    color.getRecords();
    color.generate();
}
function reset(){
    color.reset();
}
