const increment = (arrayNumber) => {
    const incrementedArray = [];
    let string = '';
  
    for (let i = 0; i < arrayNumber.length; i++) {
      string += arrayNumber[i];
    }
  
    incrementedArray.push(parseInt(string) + 1);
  
    return incrementedArray;
}
  
  
console.log(increment( [9, 2, 3] ));

// increment([9, 2, 3])
// return -> [924]
  
