function refresh(){
    let myInput=document.getElementById('input1');
    myInput.value='';
    let result=document.getElementById("result");
    result.innerHTML='';
}
function showSquare(){
    let myInput=document.getElementById('input1');
    let a=+myInput.value;
    let result=document.getElementById("result");
    result.innerHTML=`Square of <span>${a}</span> is <span>${a*a}</span>`;
}