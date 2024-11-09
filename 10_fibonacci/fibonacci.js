const fibonacci = function(num) {
num = parseInt(num)//to ensure all strings are converted to num

if (num === 0) //0th fib return zero
{
    return 0;
}

else if (num < 0) //negative fib returns an opps 
{
    return "OOPS"
}
else{
//create a fib seq up to the wanted index 
function createFibArray(num){
let start = 0;
let fibArray = [1,1]; 
let currentIndex = 1;//start at the end of the fib array 
while (start < num)
{
    fibArray[currentIndex+1] = fibArray[currentIndex] + fibArray[currentIndex-1];
    currentIndex++; //increment currentindex to move to new index
    start++; //increment start to move
}

return fibArray[num];
}

return createFibArray(num-1);  
}

};


fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
