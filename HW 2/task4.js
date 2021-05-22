var a = +prompt("Укажите число А");
var b = +prompt("Укажите число В");

if (b < a) {
    console.log("Ошибка, число B должно быть больше чила A")
} else {
    var s = 0;
    // while (a < b) {
    //     if (a % 2) {
    //         console.log(a);
    //     }

    //     s += a++;
    // }
    for (; a < b; a++) {
        if (a % 2) {
            console.log(a)
        } 
        s += a;
    }
    console.log(s);
}

