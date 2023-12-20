function factorialNumber(number) {
    let factorial = 1;
    for (i = 1; i <= number; i++) {
        factorial = factorial * i;
        console.log(i,factorial)
    }
    return factorial
}
const totalFactorialNumber = factorialNumber(8)
console.log(totalFactorialNumber)