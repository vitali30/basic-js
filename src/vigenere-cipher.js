class VigenereCipheringMachine {
    constructor(flag = true) {
    this.direct = flag;
    }
    encrypt(message,key) {
        if(!message || !key) throw new Error();
        let messageArray = [...message.toLowerCase()];
        let keyArray = [...key.toLowerCase()];
        let result = [];
        while (messageArray.length > keyArray.length) keyArray.push(...keyArray);        
        for (let i = 0 ; i < messageArray.length ; i++){
            if (/[a-z]/.test(messageArray[i])){
                let me = messageArray[i].charCodeAt();
                let ke = keyArray.shift().charCodeAt();
                if (me + ke - 194 < 26) result.push(String.fromCodePoint(me + ke - 97));
                else result.push(String.fromCodePoint(me + ke - 97 - 26))
            }
            else result.push(messageArray[i])
        }
        return this.direct ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
    }

    decrypt(message,key) {
        if(!message || !key) throw new Error();
        let messageArray = [...message.toLowerCase()];
        let keyArray = [...key.toLowerCase()];
        let result = [];
        while (messageArray.length > keyArray.length) keyArray.push(...keyArray);
        for (let i = 0 ; i < messageArray.length ; i++){
            if (/[a-z]/.test(messageArray[i])){
                let me = messageArray[i].charCodeAt();
                let ke = keyArray.shift().charCodeAt();
                if (me-ke >= 0) result.push(String.fromCodePoint(me - ke + 97))
                else result.push(String.fromCodePoint(me - ke + 26 + 97))
            }
            else result.push(messageArray[i])
        }
        return this.direct ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
    }
}
module.exports = VigenereCipheringMachine;

