module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let n = 1;
        if(arr.some(element=>Array.isArray(element))){
            return n + this.calculateDepth(arr.flat());
        }
        else return n;
    }
};