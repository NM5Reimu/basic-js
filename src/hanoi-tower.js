module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let ans = {};
  ans.turns = 2 ** disksNumber - 1;
  ans.seconds = Math.trunc(( 2 ** disksNumber - 1 ) / ( turnsSpeed / 3600 ));
  return ans
}
