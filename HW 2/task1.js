    let x = +prompt("Веедите число 1")
    let y = +prompt("Веедите число 2")
    let z = +prompt("Веедите число 3")
    let b = x + y + z
    let c = b / 3
     if  (x == y || x == z || y == z) {
        console.log("ошибка");
    } else
        console.log(c);
