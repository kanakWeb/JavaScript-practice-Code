var student = ['karim', 'rahim', 'siplu', 'siku']

var length = typeof student;
console.log(student)

console.log(length) //array type check 

console.log(student.length)//length check //output

var positionOfArray = student.indexOf('siplu') //position check
console.log(positionOfArray) //output

student[1]='kanak'//set new index value
student.push('roma') //set last new value
student.pop() //array to out value

console.log(student)//output
console.log(typeof student)