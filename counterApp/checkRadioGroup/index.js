document.getElementById("submitBtn").onclick = function(){
    let Male = document.getElementById('male');
    let Female = document.getElementById('female');
    let Other = document.getElementById('other');

    let Checknew = document.getElementById('checkbtn');

    if(Male.checked){
        console.log("you are Male!!");

    }
    else if(Female.checked){
        console.log("you are female!!");

    }
    else if (Other.checked){
        console.log("you are made differentely!!");

    }
    else{
        console.log('you have to select one!');
    }

if(Checknew.checked){
    console.log('you are welcome!!')
}
else{
    console.log('you havenot check the term and conditions!!')
}
}