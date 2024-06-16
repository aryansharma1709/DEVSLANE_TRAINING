let x;
x=prompt("input a number");
document.write(`Square
     calculator 
    ${x*x}`);
document.write(`Double
     Calculator 
    ${2*x}`);
let y=+prompt("input first number")
let z=+prompt("input second number")
    for(let i=1;i<=z;i=i+1)
     {
         document.write(`<p>${y} x ${i}=${y*i}</p>`);
     }
let sum=0;
 for(let j=1;j<=2*x;j=j+2)
     {
        sum+=j;
     }
     document.write(`Sum of odd number :${sum}`);
