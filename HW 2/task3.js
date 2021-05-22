var n1 = +prompt("Укажите число 1")
var n2 = +prompt("Укажите число 2")
var n3 = +prompt("Укажите число 3")
if (n1 > n2 && n1 > n3) {
    console.log(n1)
} else if (n2 > n1 && n2 > n3) {
    console.log(n2)
} else if (n3 > n1 && n3 > n2) {
    console.log(n3)
}