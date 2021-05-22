    var q = +prompt ("Укажите число")
    var b = q + 1
    var star = "*"
    for (let i = 0; i < b; i++) {
        for(let j = 0; j < i; j++) {
            document.write(star);
        }
        document.write("<br>")
    }

    