/*Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value 
and console.logs it. Once the value is 0 it should log “DONE!” and stop.*/

//declare a timer var that runs every 1000 ms => setInterval 
    //decrement num 
    //if num is zero,
        //stop timer and console log done
    //else  
        //console log num

function countdown(num){
    let timer = setInterval(function(){
        num--;
        if(num === 0){
            clearInterval(timer);
            console.log('DONE!');
        }
        else{
            console.log(num);
        }
    }, 1000)
}

console.log(countdown(4));
// 3
// 2
// 1
// "DONE!"

/*Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a 
random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries 
it took before we found a number greater than .75.*/

//declare num var
//declare count var => will store times it takes to get a num greater than .75
//declare timer var for every 1000 ms -> setInterval
    //assign num to a random number using Math.random
    //increment count
    //if num is greater than 0.75
        //stop timer
        //console log the amount of tries it takes 

function randomGame(){
    let num;
    let count = 0;
    let timer = setInterval(function(){
        num = Math.random();
        count++;
        if(num > 0.75){
            clearInterval(timer);
            console.log("It took " + count + " try/tries.");
        }
    }, 1000);
}

/*Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not*/

function isEven(num){
    return num % 2 === 0;
}

isEven(2); // true
isEven(3); // false

/*Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not*/

function isOdd(num){
    return num % 2 !== 0;
}

isOdd(3); // true
isOdd(14); // false

/*Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 
and can only be divided in whole by itself and 1), otherwise returns false*/

//if number is less than 2,
    //return false
//iterate through num using for...loop
    //if num is divisible by any number in that range,
        //return false
//return true

function isPrime(num){
    if(num < 2){
        return false;
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

isPrime(8); // false
isPrime(17); // true

/*Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the 
number passed to it*/

function numberFact(num, fn){
    return fn(num);
}

numberFact(59,isEven); // false
numberFact(59,isOdd); // true
numberFact(59,isPrime); // true

/*Write a function called find. It should take in an array and a callback and return the first value found in the array that matches 
the condition.*/

//iterate through arr using for...of loop
    //if val returns true when invoking callback function,
        //return val
    //else,
        //return undefined

function find(arr, fn){
    for(let val of arr){
        if(fn(val)){
            return val;
        }
    }
}

find([8,11,4,27], function(val){return val >= 10}); // 11
find([8,11,4,27], function(val){return val === 5}); // undefined

/*Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array 
that matches the condition.*/

//iterate through arr using for...loop
    //when callback fn is invoked accepting arr val and returns true,
        //return the index

function findIndex(arr, fn){
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i])){
            return i;
        }
    }
}

// returns 1 (index of the first value greater than or equal to 10)
findIndex([8,11,4,27], function(val){return val >= 10});

findIndex([8,11,4,27], function(val){return val === 7}); // undefined

/*Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should 
return the product of the two. If the function is only passed one parameter – it should return a function which can later be 
passed another parameter to return the product. You will have to use closure and arguments to solve this.*/

//if arguments length is 1,
    //return anonymous function that accepts b as a parameter
        //return product of a and b
//else,
    //return product of a and b

function specialMultiply(a, b){
    if(arguments.length === 1){
        return function(b){
            return a * b;
        }
    }
    return a * b;
}

specialMultiply(3,4); // 12
specialMultiply(3)(4); // 12
specialMultiply(3); // returns a function 