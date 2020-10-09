const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let depth = 1;
    let innerArray = arr.filter(el => Array.isArray(el));
    if (innerArray) {
        for (let i = 0; i < innerArray.length; i++) {
            let currentDepth = 1 + this.calculateDepth(innerArray[i]);
            if (currentDepth > depth) depth = currentDepth;
        }
    }
    return depth;
  }
};