
const algo = (value) => {
  if (typeof value === 'number' && value) {
    if (value % 3 === 0 && value % 5 === 0) {
      return 'FizzBuzz';
    }
  
    if (value % 3 == 0) {
      return 'Fizz';
    }
    
    if (value % 5 === 0) {
      return 'Buzz';
    }
  
    return value;
  }
  return false;
}

// algo(10) => 'Buzz'
// algo(18) => 'Fizz'
// algo(30) => 'FizzBuzz'
// algo('not a number') => false

  
  