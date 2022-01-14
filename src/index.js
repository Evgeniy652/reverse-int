module.exports = function reverse (n) {
  let value=Math.abs(n);
  let nArray= value.toString().split('');
  let nArray2=nArray.reverse();
  let nString= nArray2.join('');
  return +nString;
}
