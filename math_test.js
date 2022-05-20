var mathjs = require('mathjs')

console.log(mathjs.simplify('3 + 2 / 4').toString())
console.log(mathjs.derivative('x^2 + x', 'x').toString())
console.log(mathjs.evaluate('12.7 cm to inch').toString())
console.log("Tu calificación es: ",  mathjs.sqrt(100));