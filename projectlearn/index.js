let content = document.getElementById('myDiv');
let btn = document.getElementById('btn');

btn.addEventListener('click',begin);

const begin =()=>{
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(x>=200 || y>=200){
            clearInterval(timerId);
        }
        else{
            x+=1;
            y+=1;
            content.style.top = y + "px"
            content.style.top = x + "px"
        }
    }
}