var arr = [1, 3, 3, 1, 1, 3];

var result = arr.reduce(function (square, current, index) {
  let sq = 0;
  for (let i = index; i < arr.length; i++) {
    const element = arr[i];
    sq = Math.max(sq, Math.min(current, element) * (i - index));
  }

  return sq > square ? sq : square;
}, 0);

console.log(result);
