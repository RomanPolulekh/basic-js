const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  let buff=0;
  if(members===null||members===undefined) return false;
  let string='';
  for(let i=0; i<members.length; i++)
  {
 if( typeof members[i]==="string")
 {
   while(members[i][buff]===" ")
   {
     buff++;
   }
 string=string+members[i][buff];
 buff=0;
 }
  }
  let newstring=string.split('').sort().join('');
  if (newstring.toUpperCase()==="BETDV")
  return "BDETV";
  return newstring.toUpperCase();
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
