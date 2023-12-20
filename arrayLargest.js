function ArrayLargest(numbers) {
    let Largest = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        const element = numbers[i]
        if (element > Largest) {
            Largest = element
        }

    }
return Largest

}
const ages = ArrayLargest([10, 20, 89, 58, 78, 55, 88, 2, 5, 8,-1])
console.log(ages)