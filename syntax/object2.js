var f = function(){
  console.log(1+1);
  console.log(1+2);
}

var a = [f,1,'1+1'];
a[0]()
console.log('hi : ', a[1])
console.log('hi2: ', a[2])

var b = {
  func:f
}
b.func();
