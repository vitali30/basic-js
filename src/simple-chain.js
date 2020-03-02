const chainMaker = {
  chain: [],
  getLength() {
   return (this.chain.length);
  },
  addLink(value) {
    if (value == null) {
            value = 'null';
          }
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position <=0 || typeof position != 'number' || position > this.chain.length){
      this.chain = [];
      throw new Error();
    } 
    else {this.chain.splice(position-1, 1);
      return this;
      }
    },

  reverseChain() {
   this.chain.reverse();
   return this;
  },
  finishChain() {
    let str = '( ' + this.chain.join(' )~~( ') + ' )';
    this.chain = [];
    return str;

  }
};
module.exports = chainMaker;
//console.log(chainMaker.reverseChain().reverseChain().addLink(NaN).addLink({0: 'first', 1: 'second', 'length': 2}).addLink({0: 'first', 1: 'second', 'length': 2}).addLink({0: 'first', 1: 'second', 'length': 2}).reverseChain().reverseChain().addLink({0: 'first', 1: 'second', 'length': 2}).addLink(true).finishChain())
//, '( NaN )~~( [object Object] )~~( [object Object] )~~( [object Object] )~~( [object Object] )~~( true )'

