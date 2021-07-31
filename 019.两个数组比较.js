var arr1 = [1, 2];
var arr2 = [1, null];
console.log('[]:', isPair(arr1, arr2));
function isPair(arr1, arr2) {
    // 边界条件
    if (arr1.indexOf(null) != -1 && arr2.indexOf(null) == -1)
        return false;
    if (arr1.indexOf(null) == -1 && arr2.indexOf(null) != -1)
        return false;
    var len1 = arr1.length;
    var len2 = arr2.length;
    var res = [];
    for (var i = 0; i < len1; ++i) {
        for (var j = 0; j < len2; ++j) {
            if (arr1[i] == null || arr2[j] == null)
                continue;
            if (arr1[i] == arr2[j]) {
                res.push(arr1[i]);
                continue;
            }
        }
    }
    return res.length != 0;
}
