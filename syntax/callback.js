/*
function a(){
  console.log('A');
}
a();
*/

var a = function(){
  console.log('A');
}

function slowfunc(callback){
  callback();
}

slowfunc(a);
console.log("Hello nodejs");
