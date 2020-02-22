module.exports = function countCats(matrix) {
  let result = [];
  let num = 0;
  for (let index of matrix){
    result.push(index);
  }
for (let index of result.join().split(",")){
  if (index == "^^")num++;
}
 return (num)
}