const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  turns=3;
  let time=0;
  for(let i=2;i<disksNumber;i++)
  {
turns=turns*2+1;
  }
time=(3600/turnsSpeed)*turns;
let seconds=Math.trunc(time);

return {
  turns,
  seconds,
  }



  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
