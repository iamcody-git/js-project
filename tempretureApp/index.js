document.getElementById('submitBtn').onclick = function(){
    let temp;
    if(document.getElementById('cbtn').checked){
        temp = document.getElementById('tempBtn').value;

        temp = Number(temp);
        temp =tocelsius(temp);
        document.getElementById('leble').innerHTML= temp + "°C";

    }
    else if(document.getElementById('fbtn').checked){
        temp = document.getElementById('tempBtn').value;

        temp = Number(temp);
        temp =toFahrenheit(temp);
        document.getElementById('leble').innerHTML= temp + "°F";
    }
    else{
        document.getElementById('leble').innerHTML="select a unit";
    }
}

function tocelsius(temp){
    return(temp - 32) * (5/9);
}

function toFahrenheit(temp){
    return (temp * (9/5)) + 32;
}

    