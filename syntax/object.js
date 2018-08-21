var members=["nani", "park", "kim"];
console.log(members[1]);
console.log(members);

var i = 0;
while(i<members.length){
  console.log('array loop', members[i]);
  i+=1;
}

var object = {
  "top" : "nani",
  "medium" : "park",
  "bottom" : "kim"
}
console.log(object.medium);
console.log(object['medium']);
console.log(object);
console.log(object[0]);

for(var nani in object){
  console.log('object => ', nani, 'value => ', object[nani]);
}
