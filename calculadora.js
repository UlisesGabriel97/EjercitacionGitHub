let suma =require("./suma")
let resta=require("./resta")
let {argv}=require("process")

n1=+argv[2]
n2=+argv[4]
switch (argv[3]) {
    case "+":
        console.log(suma(n1,n2));
        break;
    case "-":
        console.log(resta(n1,n2));
        break;
    
    default:
        break;
}