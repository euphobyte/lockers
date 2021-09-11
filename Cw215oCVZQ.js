function test(){
  var lb = document.createElement('label');
  lb.innerText = "Hello World!";
  var x = document.getElementsByTagName("BODY")[0];
  x.appendChild(lb);
}
