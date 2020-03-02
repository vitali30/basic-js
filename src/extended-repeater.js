module.exports = function repeater(str, options) {
    let stringNew = str+'';
    options.separator = options.separator || '+';
    options.additionSeparator = options.additionSeparator || '|'
    let additionNew = ''
    if(options.additionRepeatTimes>1){
        options.addition = options.addition + options.additionSeparator;
        additionNew = options.addition.repeat(options.additionRepeatTimes);
        additionNew = additionNew.slice(0, additionNew.length-options.additionSeparator.length);
    }
    else if (options.addition){
        additionNew = options.addition;
    }
    if(options.repeatTimes){
        stringNew = stringNew + additionNew + options.separator;
        stringNew = stringNew.repeat(options.repeatTimes);
        stringNew = stringNew.slice(0, stringNew.length-options.separator.length);
    }
    else {
        stringNew = stringNew + additionNew;
    }
    return stringNew;
};
