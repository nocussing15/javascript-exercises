const repeatString = function(string,num) {
    let result = "";                        //empty string value 
    num = parseInt(num) //will ensure num is of int type 
    if (num >= 0)
    {
        for (let i =0; i < num; i++)        //will concat string word together "num" number of times. 
        {
            result += string;
        }
    
        return result; 

    }

    else 
    result = "ERROR";  
    return result; 
    
};

// Do not edit below this line
module.exports = repeatString;
