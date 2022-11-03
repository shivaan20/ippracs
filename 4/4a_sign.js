//4a
//sign of product of three numbers
var x = 5;
var y = -2;
var z = -3;
var sign = 0;
if(x<0){
    sign += 1;
}
if(y<0){
    sign += 1;
}
if(z<0){
    sign += 1;
}
if(sign % 2 == 0){
    console.log("The ans has sign +");
}
else{
    console.log("The ans has sign -");
}