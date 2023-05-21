var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var result = number.findIndex((currentValue, index, arr) => {
    return currentValue > 6;
});

// console.log(result);

var result = number.filter((currentValue, index, arr) => {
    // console.log(index);
    // console.log(arr);
  return currentValue > 4;  
});
// console.log(result);

var result = number.slice(1, 4); 
// console.log(result);

var number = [1, 2, 3, 4, 5]
var result = number.splice(1, 2, 10, 12, 13, 19);
console.log(number);