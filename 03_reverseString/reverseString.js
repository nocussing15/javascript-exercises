const reverseString = function(string) {
//
let reversedString = ""; 
for (let i = 0; i < string.length; i++)
    reversedString += string[string.length-1-i];

return reversedString; 
};



// Do not edit below this line
module.exports = reverseString;
