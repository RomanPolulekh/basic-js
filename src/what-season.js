const CustomError = require("../extensions/custom-error");

  module.exports = function getSeason(date) {
    if (date === undefined) return 'Unable to determine the time of year!';
    if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('THROWN');
  
      let month = date.getMonth();
      if(month===0||month===1||month===11)
      {
return "winter";
      }
      if(month===2||month===3||month===4)
      {
return "spring";
      }
      if(month===5||month===6||month===7)
      {
return "summer";
      }
      if(month===8||month===9||month===10)
      {
return "autumn";
      }
  /*let month='g';
  if (date===undefined)
  throw new Error2("Unable to determine the time of the year!")
  if (date===null)
  throw new Error("Thrown");
  let boom='summer';
  if((data[i]>=0 && data[i]<=9)&&(data[i+1]>=0 && data[i+1]<=9)&&data[i+2]==" ")
  {
 let string=date.slice(date[i+3],date[i+6]);
 return string;
  }
  return boom;
/*if(string==="Jan"||string==="Dec"||string==="Feb")
return string;
if(string==="Jun"||string==="Jul"||string==="Aug")
return string;
if(string==="Nov"||string==="Sep"||string==="Oct")
return string;
if(string==="May"||string==="Mar"||string==="Apr")
return string;
  }*/
  
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
