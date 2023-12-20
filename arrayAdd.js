 let numbers=[10,26,25,65,52,50];
let sum=0;
 for(i=0; i<numbers.length; i++){
    let element=numbers[i]
    sum =sum+element
 }
 console.log(sum)

//  array function

function arrayAdd(arrayNumber){
    let summation=0;
    for(i=0; i<arrayNumber.length; i++){
        const arrayElement=arrayNumber[i]
        summation=summation+arrayElement;
    }
    return summation;
}
const arrayValue=arrayAdd([10,28,25,65,52,50])
console.log(arrayValue)
