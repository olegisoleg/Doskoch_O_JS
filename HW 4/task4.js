function fibonacci(x) {
    var a = 1, b = 1, c = 0;
if (x <= 2) {
    return console.log(1);
}
else {
    for (var i = 2; i < x; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return console.log(c);
    }
}
fibonacci(+prompt("Введите число"));