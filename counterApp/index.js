let count =0;

document.getElementById("inBoard").onclick = function () {
    count +=1;
    document.getElementById("scoreBoard").innerHTML=count;
}

document.getElementById("deBoard").onclick = function () {
    count -=1;
    document.getElementById("scoreBoard").innerHTML=count;
}

document.getElementById("reset").onclick = function () {
    count =0;
    document.getElementById("scoreBoard").innerHTML=count;
}