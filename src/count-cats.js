const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let count=0;
   for(let i=0;i< matrix.length;i++)
   {
    for(let a=0;a< matrix[i].length;a++)
    {
if(matrix[i][a]==="^^") count++;
    }
   }
  //for(let i=0;i<matrix.length;)
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  return count;
};
