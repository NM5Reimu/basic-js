const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  matrix.map(row => {
    row.map(item => {
      if(item === '^^') cats++;
    });
  });
  return cats;
};
