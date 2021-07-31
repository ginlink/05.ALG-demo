var filterHas = function (originArr, targetArr) {
    return originArr.filter(function (item) { return targetArr.indexOf(item) == -1; });
};
var main = function () {
    var originArr = [1, 2, 3, 4, 5];
    var targetArr = [1, 2];
    var res = filterHas(originArr, targetArr);
    console.log('[res]:', res);
};
main();
// console.log('[()]:', [].filter((e:any)=>{}))
// 返回空数组
