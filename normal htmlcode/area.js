let area;
let width;
let length;

width= window.prompt('the value of  width is :');
length= window.prompt('the value of length is :');



const Areacalc= (width,length)=>{
    return width *length;
    
}

area= Areacalc(width,length);
console.log('the area of rectangle: ', area)
