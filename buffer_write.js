buff256 = new Buffer(256);
buff256.fill(0);
buff256.write("add some text");
console.log(buff256.toString());
buff256.write("more test");
console.log(buff256.toString());
buff256[18]=43;
console.log(buff256.toString());