let a= 20;
let b = 32;

console.log("Add =",a+b);

let c = 23;
let d = 23;

console.log("Sub =",c-d);

let a1 = 8;
let a2 = 4;

console.log("Multi =",a1*a2);

let b1 = 6;
let b2 = 2;

console.log("Div =",b1/b2);


// Conditions
// Check weather the number is even or odd:

let num = 45;

if(num%2==0){
    console.log("The nunber is Even:",num)
}else{
    console.log("The number is Odd:",num)
}


// Check weather the number is negative or positive:

let no = 0;

if(no>-34){
    console.log("The given number is Positive:",no)
}else{
    console.log("The number is negative:",no)
}

// Greatest of Two Number:

let a11 = 534;
let a12 = 343;

if(a11>a12){
    console.log(' A is greater then B',(a11))
}else{
    console.log("B is greater then A",(a12))
}


// Largest of three Number:

let b11 = 22;
let b12 = 23;
let b13 = 21;

console.log(b11,b12,b13)
if(b11>b12 && b11>b13){
    console.log((b11),"is greater")
}else if(b12>b11 && b12>b13){
    console.log((b12),"is grater")
}else{
    console.log((b13),"is greater")
}

// eligiable voting:

let age = 19;

if (age >= 12) {
    console.log("Eligible to vote form this year Congress");
} else {
    console.log("Not eligible better luck next time bye bye:");
}


// Loops
// Print no 1 to 10

for(let i=1;i<=10;i++){
    console.log(i);
}

// Print even no from 1 to 20

for(let i=1; i<=20; i++){
    if(i%2==0){
        console.log(i);
    }
}

// Print table of 5

let n=5;
for(i=1; i<=10; i++){
    console.log(n,"X",i,"=",n*i);
}

// Sum of no from 1 to 10

let sum = 0;
for(let i=1; i<=10; i++){
    sum+=i;
}
console.log("Sum=",sum);


// Factorial

let n1 = 5;
let fact = 1;

for(i=1; i<=n1; i++){
    fact*=i;
}
console.log("Factorial =",fact);


// Functions
// Simple functions

function greet(){
    console.log("Helloooo...... to JavaScript");
}
greet();


// functions with parameters

function add(a,b){
    console.log(a+b);
}
add(5,5);

// Functions with even odd no check

function check(num){
    if(num%2==0){
        console.log("Even",num)
    }
    else{
        console.log("Odd",num)
    }
}
check(4);


// Function to find square

function square(num){
    console.log("The square of the number is:",num*num)
}
square(45);


// Arrow function

const multiply=(a,b)=>a*b;
console.log(multiply(3,3));


// Arrays
// Print arrays elements

let arr = [23,45,32,54,27,64,25]
for(i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// largest number in array

let arr1 = [12,14,15,23,16]
let max = arr[0]

for(i=0; i<=arr1.length; i++){
    if(arr1[i]>max){
        max = arr1[i];
    }

}
console.log("Largest number is",max)


// Reverse of an array

let arr2 = [34,67,45,90,87]
let reversed = arr2.reverse();

console.log(reversed)

// Count of an array

let arr3 = [1,2,3,4,5,6,7,8,9,10];

console.log(arr3.length);

// Check Value in Array

let arr4 = [10,20,30,44,50,60,70];
let search = 44;

if(arr4.includes(search)){
    console.log("Found the search",search)
}else{
    console.log("Not found",search)
}