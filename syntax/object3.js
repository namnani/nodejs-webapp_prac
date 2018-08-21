var q = {
  v1 : 'v1',
  v2 : 'v2',
  f1 : function(){
    console.log(this.v1);
  },
  f2 : function(){
    console.log(this.v2);
  }
}

function f1(){
  console.log("hi");
}

function f1(){
  console.log("bye");
}

q.f1();
q.f2();
f1();
