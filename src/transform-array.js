module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw error;
    let arrNew = [];
    for (let i = 0 ; i < arr.length ; i ++){
        if (arr[i] == "--discard-next"){if (i+1 < arr.length) i++}
        else if (arr[i] == "--discard-prev"){if (i>0) arrNew.pop()}
        else if (arr[i] == "--double-next"){if (i+1 < arr.length) arrNew.push(arr[i+1])}
        else if (arr[i] == "--double-prev"){if (i>0) arrNew.push(arr[i-1])}
        else arrNew.push(arr[i]);
    }
return (arrNew);
};
