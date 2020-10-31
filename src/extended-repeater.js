const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes, separator='+', addition, additionRepeatTimes, additionSeparator='|'} ) {
   let result='';
   if(repeatTimes==undefined&&additionRepeatTimes==undefined) return result=result+str+addition;
  for(let i=0;i<repeatTimes;i++)
   {
        result=result+str;
        for(let a=0; a<additionRepeatTimes; a++)
          {
           result=result+addition;
           if(a<additionRepeatTimes-1) result=result+additionSeparator;
          }
        if(i<repeatTimes-1)result=result+separator;

        
    }
     return result;
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
  
  
