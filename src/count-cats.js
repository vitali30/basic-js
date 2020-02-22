module.exports = function countCats(matrix) {
  let result = [];
  let num = 0;
  for (let index of matrix){
    result.push(index);
  }
  result = result.join().split(","); 
for (let index of result){
  if (index == "^^")num++;
}



 return (num)
};

let matrix = [
  [1, 2, "^^", 4, 5],
  [6, "^^", 8, 9],
  ];
console.log(module.exports (matrix));