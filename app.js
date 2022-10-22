function strCount(str, letter){  
  
    let regex = RegExp(letter, 'g');
    let strValue = str.match(regex);
  
  if(strValue === null){
      return 0
  } else{
      return str.match(regex).length;
  }
    
  }







