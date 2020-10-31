const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag){
    this.flag=flag;
  }
 
  encrypt(string, keyword) {
    constructor(string, keyword)
    {
      this.string=string;
      this.keyword=keyword;
    }
    let arr=[],arrKeyword=[],resultArr=[],counter=0;
    let a=this.string.toUpperCase();
    let b=this.keyword.toUpperCase();
   for(let i=0;i<a.length;i++)//arr
   {
  if (a.charCodeAt(i)<65 || a.charCodeAt(i)>90) arr[i]=a[i]
  else arr[i]=a.charCodeAt(i)-65;
   }
    for(let i=0;i<a.length;i++)//arrKeyword
    {
    if(counter%(b.length)===0)
    {
      counter=0;
      if(a.charCodeAt(i)<65 || a.charCodeAt(i)>90)
       {
         arrKeyword[i]=a[i]
        }
      else {
        arrKeyword[i]=b.charCodeAt(counter)-65;
        counter++;
      }
    } 
    else { 
      if(a.charCodeAt(i)<65 || a.charCodeAt(i)>90) arrKeyword[i]=a[i]
      else {
        arrKeyword[i]=b.charCodeAt(counter)-65;
        counter++;
      }
    }
  }
    for(let i=0;i<a.length;i++)
    {
      if(a.charCodeAt(i)>=65 && a.charCodeAt(i)<=90)
      {
         resultArr[i]=arr[i]+arrKeyword[i];
         if(resultArr[i]>25) resultArr[i]=resultArr[i]-26;
      } else
      {
        resultArr[i]=arr[i];
      }
    }
    for(let i=0;i<a.length;i++)
    {
      if( typeof resultArr[i]==='number') resultArr[i]=String.fromCharCode(resultArr[i]+65)
      
    }
    if(this.flag===false){
     let buff=resultArr.join('');
     return buff.split("").reverse().join("");
    }
    return  resultArr.join('');
  }    
  ///////////////////////////////////////////////////////////////////////
  decrypt(string, keyword) {
      constructor(string, keyword)
      {
        this.string=string;
        this.keyword=keyword;
      }
      let arr=[],arrKeyword=[],resultArr=[],counter=0;
      let a=this.string.toUpperCase();
      let b=this.keyword.toUpperCase();
     for(let i=0;i<a.length;i++)
     {
    if (a.charCodeAt(i)<65 || a.charCodeAt(i)>90) arr[i]=a[i]
    else arr[i]=a.charCodeAt(i)-65;
     }
      for(let i=0;i<a.length;i++)
      {
      if(counter%(b.length)===0)
      {
        counter=0;
        if(a.charCodeAt(i)<65 || a.charCodeAt(i)>90)
         {
           arrKeyword[i]=a[i]
          }
        else {
          arrKeyword[i]=b.charCodeAt(counter)-65;
          counter++;
        }
      } 
      else { 
        if(a.charCodeAt(i)<65 || a.charCodeAt(i)>90) arrKeyword[i]=a[i]
        else {
          arrKeyword[i]=b.charCodeAt(counter)-65;
          counter++;
        }
      }
    }
      for(let i=0;i<a.length;i++)
      {
        if(a.charCodeAt(i)>=65 && a.charCodeAt(i)<=90)
        {
           resultArr[i]=arr[i]-arrKeyword[i];
           if(resultArr[i]<0) resultArr[i]=resultArr[i]+26;
        } else
        {
          resultArr[i]=arr[i];
        }
      }
      for(let i=0;i<a.length;i++)
      {
        if( typeof resultArr[i]==='number') resultArr[i]=String.fromCharCode(resultArr[i]+65)
        
      }
      if(this.flag===false){
        let buff=resultArr.join('');
        return buff.split("").reverse().join("");
       }
      return  resultArr.join('');
  }
}
module.exports = VigenereCipheringMachine;
