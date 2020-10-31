const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
  if(typeof sampleActivity!=="string"||sampleActivity===null||sampleActivity===undefined) return false;
  if(sampleActivity.length>2|| sampleActivity===' '||sampleActivity==='') return false;

  let act=Number(sampleActivity);
  if(act<=0||act>15) return false;
  let t= (Math.log(MODERN_ACTIVITY/act)*HALF_LIFE_PERIOD)/0.693;
  return t;

  //throw new CustomError('Not implemented');
  
  // remove line with error and write your code here
};
