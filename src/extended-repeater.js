const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let times = options['repeatTimes']
  let separator = options['separator']
  let addition = options['addition']
  let additionRepeat = options['additionRepeatTimes']
  let additionSeparator = options['additionSeparator']

  if (times === undefined) {
    str += addition
  } else {
    if (options.separator === undefined) {
      separator = '+'
    }
    if (options.addition === undefined) {
      addition = ''
    }
    if (options.additionRepeat === null) {
      additionRepeat = 0
    }
    if (options.additionSeparator === undefined) {
      additionSeparator = ''
    }

    addition = (addition + additionSeparator).repeat(additionRepeat)
    addition = addition.slice(0, (addition.length - additionSeparator.length))
    str = (str + addition + separator).repeat(times)
    str = str.slice(0, (str.length - separator.length))
  }

  return str
};
  