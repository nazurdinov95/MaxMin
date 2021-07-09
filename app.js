function checkBrackets(str) {
    let closers = {'[': ']','(': ')','{': '}'};
    
    let parStack = str.match(/\(|\{|\[|\)|\}|\]/g) || [];
  
    if (parStack.length % 2 !== 0) {
      return false;
    } else {
      while (parStack.length) {
        
        if (closers[parStack.shift()] !== parStack.pop()) {
         
          return false
        }
      }
      return true;
    }
  }

  console.log('no braces ', checkBrackets("(())(){[}"));
  console.log('matched ', checkBrackets("({[]})"));
  console.log('mis matched ',checkBrackets("[(]) abcd"));
  console.log('matched ',checkBrackets("[{()}] test"));