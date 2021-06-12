function calculate() {
    a = +prompt("Введите число А");
    b = +prompt("Введите число В");
    sign = prompt("Укажите действие: * / + -");
    if ((isNaN(a)) || (isNaN(b))) {
            alert("Введите число!")
        }
    else if (sign == "+"){
        c = a + b;
        console.log(c);
    }
    else if (sign == "-"){
        c = a - b;
        console.log(c);
    }
    else if (sign == "*"){
        c = a * b;
        console.log(c);
    }
    else if (sign == "/"){
        c = a / b;
        console.log(c);
    }
    else if (sign !== "+" || "-" || "*" || "/") {
        console.log("Введено неверное действие")
    }   
}
calculate()