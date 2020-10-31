const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr, counter=1 ) {
    
      constructor()
      {
      this.arr=arr;
      this.counter=counter;
      }
      for(let i=0; i<arr.length; i++)
      {
        if(Array.isArray(arr[i])===true) {
          this.counter=this.counter+1;
         this.counter=this.calculateDepth(arr[i],this.counter)
        } 
        
      }
      return this.counter;
      
     

    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};
