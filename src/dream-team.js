module.exports = function createDreamTeam(members) {
      let arRes = [];
        if (!Array.isArray(members))return (false) 
    for (let array of members){
        if (typeof array == "string") {
            for (let value of array){
                if (value !== ' '){
                    arRes.push(value);break
                }
            }
        }
    }
    return (arRes.join('').toUpperCase().split('').sort().join(''));
};