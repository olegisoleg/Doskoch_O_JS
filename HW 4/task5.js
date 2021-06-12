var humanChoice = prompt("Камень, ножницы или Бумага?");
var computerChoice = Math.random();
function rps() {
    if (computerChoice < 0.34) {
        computerChoice = "камень", alert("Компьютер выбрал: камень")
    } else if (computerChoice <= 0.67) {
        computerChoice = "бумага", alert("Компьютер выбрал: бумага")
    } else {
        computerChoice = "ножницы", alert("Компьютер выбрал: ножницы")
    }
        if (computerChoice == humanChoice) {
            console.log("Ничья")
        } else if (humanChoice == "камень" && computerChoice == "ножницы") {
            console.log("Вы победили!")
        } else if (humanChoice == "ножницы" && computerChoice == "бумага") {
            console.log("Вы победили!")
        } else if (humanChoice == "бумага" && computerChoice == "камень") {
            console.log("Вы победили!") 
        } else console.log("Победил компьютер!")        
} function playAgain() {
    let choice = prompt("Сыграть еще раз? Да/Нет")
        if (choice === "да") {
            rps()
        } else console.log("Спасибо за игру!")
}
rps()