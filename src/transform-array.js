const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) 
{
  let count=0;
  /*if(Array.isArray(arr)===false)
  {
    throw new CustomError('Error!Not array');
  }*/
  
  let buff2=arr;
for( let i=0; i<buff2.length; i++)
{
if(buff2[i]==='--double-next')
{ 
  count++;
  if(buff2[i+2]==='--discard-prev') { buff2.splice(i, 3, buff2[i+1]); return buff2;}
  if(buff2[i+2]==='--double-prev') { buff2.splice(i, 3, buff2[i+1],buff2[i+1],buff2[i+1]); return buff2;}
  if (i===buff2.length-1) 
  { buff2.splice(i, 1)
 return buff2;
  }
 else{
  buff2.splice(i, 1, buff2[i+1]);
  return buff2;
}
}
if(buff2[i]==='--double-prev')
{  
  if(buff2[i]==='--double-prev')
  count++;
  if (i===0) 
   { buff2.splice(i, 1)
  return buff2;
   }
  else{
  buff2.splice(i, 1, buff2[i-1]);
  return buff2;
  }
}
if(buff2[i]==='--discard-prev')
{ 
  count++;
  if(i===0) { buff2.splice(i, 1)
    return buff2;
  } else {
  buff2.splice(i-1, 2);
  return buff2;
}
}
if(buff2[i]==='--discard-next')
{  
  count++;
  if(buff2[i+2]==='--discard-prev') {buff2.splice(i, 3); return buff2;}
  if(buff2[i+2]==='--double-prev') buff2.splice(i+2, 1);
  if (i===buff2.length-1) 
  { 
    buff2.splice(i, 1);
    return buff2;
  }
  else
  {
  buff2.splice(i, 2);
  return buff2;
  }
}
}
if(count===0) return arr;

  //throw new CustomError('Not implemented');
  // remove line with error and write your code here*/
}
