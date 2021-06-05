var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];
var elementName = prompt("Введите название елемента");
// switch (elementName) {
//     case "Mitsubishi" : newElementName = prompt("Введите название нового елемента"); cars.splice(1, 0, newElementName);
//         break;
//     case "Honda" : newElementName = prompt("Введите название нового елемента"); cars.splice(2, 0, newElementName);
//         break;
//     case "Toyota" : newElementName = prompt("Введите название нового елемента"); cars.splice(3, 0, newElementName);
//         break;
//     case "Suzuki": newElementName = prompt("Введите название нового елемента"); cars.splice(4, 0, newElementName);
//         break;
//     case "Audi": newElementName = prompt("Введите название нового елемента"); cars.splice(5, 0, newElementName);
//         break;
//     case "BMW": newElementName = prompt("Введите название нового елемента"); cars.splice(6, 0, newElementName);
//         break;
//     case "Mercedes": newElementName = prompt("Введите название нового елемента"); cars.splice(7, 0, newElementName);
//         break;
//     case elementName != "Mitsubishi" || "Honda" || "Toyota" || "Suzuki" || "Audi" || "BMW" || "Mercedes" : cars.push(elementName);
//     default:
//         break;
// }console.log(cars)
for (var i = 0; i < cars.length; i++) {
    if (elementName === cars[i]) {
        var newElementName = prompt("Введите название новго елемента");
      cars.splice(i+1, 0, newElementName);
      console.log(cars);
    break;
    } else if (i === cars.length-1) {
            cars.push(elementName);
        console.log(cars);
      break;
    }
}