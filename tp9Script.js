function Decrease(){
    let Value = parseInt(document.getElementById("kdmv").value);
    Value--;
    alert(Value);
    document.getElementById("kdmv").innerHTML = toString(Value);
}
function Reset(){
    document.getElementById("kdmv").innerHTML = "0";
}
function Increase(){
    document.getElementById("kdmv").innerHTML = "KDMH";
}