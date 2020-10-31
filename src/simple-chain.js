const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:'',
  getLength() {
    let count=0;
    for(let i=0; i<this.chain.length;i++)
    {
      if( this.chain[i]=='(')count++;
    }
    return count;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
if(value==1)
this.chain=thischain+'( '+value+' )'
else{
  this.chain=this.chain+'~~( '+value+' )';
}
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    /*let buffchain='';
    let pos='';
    let a=0;
    pos=pos+String(position);
    for(let i=0; i<this.chain.length;i++)
    {
      if(this.chain[i]==pos) a=i; 
    }
    for(let i=0; i<a-4;i++)
    {
      buffchain=buffchain+this.chain[i]; 
    }
    for(let i=a+3; i<this.chain.length;i++)
    {
      buffchain=buffchain+this.chain[i]; 
    }
    return buffchain;
    */
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    return this.chain;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
