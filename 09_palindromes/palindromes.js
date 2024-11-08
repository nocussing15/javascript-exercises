/*# Exercise 09 - Palindromes

Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

### some palindromes:
  - A car, a man, a maraca.
  - Rats live on no evil star.
  - Lid off a daffodil.
  - Animal loots foliated detail of stool lamina.
  - A nut for a jar of tuna.

```javascript
palindromes('racecar') // true
palindromes('tacos') // false
```
*/
const palindromes = function (palindrome) {
    function removeNonAlpha(inputString)
    {
      return inputString.replace(/[^a-zA-Z0-9]/g,'');
    }
    
    let palinArray = String(removeNonAlpha(palindrome));
    palinArray = palinArray.toLowerCase().split('');   
    
    let isPalin = true; 
    for (let i = 0; i < palinArray.length; i++)
    {
      if (palinArray[i] !== palinArray[palinArray.length-1-i])
        {
          isPalin = false;
        }
      
    }

    return isPalin;
}

palindromes('ZZZZ car, a man, a maracaz'); 

// Do not edit below this line
module.exports = palindromes;
