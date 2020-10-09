const chainMaker = {
  chainCur: [],

  getLength() {
    return this.chainCur.length
  },
  addLink(value) {
    this.chainCur.push('( ' + value + ' )')
    return this
  },
  removeLink(position) {
    if (position <= 0 || (position ^ 0) !== position || typeof (position) !== 'number' || position > this.getLength() || position === '') {
      this.chainCur = []
      throw Error()
    } else {
      this.chainCur.splice(position - 1, 1)
      return this
    }
  },
  reverseChain() {
    this.chainCur.reverse()
    return this
  },
  finishChain() {
    let newChain = this.chainCur.join('~~')
    this.chainCur = []
    return newChain
  }
};

module.exports = chainMaker;
