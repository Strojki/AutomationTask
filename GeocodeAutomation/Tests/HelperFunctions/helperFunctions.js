var helperFunctions = function (){

  this.areStringsEqual = areStringsEqual;

};



function areStringsEqual (string1, string2){
  if(string1==string2)
    return true;
  return false;
};

module.exports =new helperFunctions();
