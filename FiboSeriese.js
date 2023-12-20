// function Series(numbers) {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//         let element = numbers[i]
//         sum=sum+element
//     }
// return sum;
// }
// const SeriesAdd=Series([0,1,1,2,3,5,8,13,21,34,54])
// console.log(SeriesAdd)

//[0,1,1,2,3,5,8,13,21,34,54]

/*
3rd=2th+1th
4th=3rd+2th
5th=4th+3rd
152th=124th+123th
nth=(n-1)th+(n-2)th
*/

const fibo=[0,1]
for(i=2; i<10; i++){
    // nth=(n-1)th+(n-2)th
 fibo[i]=fibo[i-1]+fibo[i-2]
}
console.log(fibo)