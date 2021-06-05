var a = [];
a.length = +prompt("Введите длину масива");
for(i = 0; i < a.length; i++);
 if (i % 2 === 0) {
     a[i] = ["odd", "odd", "odd"];
 }
else {
    a[i] = ["even", "even", "even"];
}console.log(a);

