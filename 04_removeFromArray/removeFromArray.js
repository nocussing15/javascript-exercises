const removeFromArray = function(array,...manyMoreArgs) {
    let newArray = array;                   //copies the argument array 


    for(let l =0; l < manyMoreArgs.length; l++)
    {
        let i = 0;
        while (i<newArray.length)
        {
                if(newArray[i] === manyMoreArgs[l])
                {
                    newArray.splice(i,1); 
                }
                else
                    i++;
        }
    }
   

    return newArray; 
};
removeFromArray([1,2,3,4,5],3);
// Do not edit below this line
module.exports = removeFromArray;
