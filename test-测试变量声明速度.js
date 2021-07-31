
// 测试声明变量会导致速度下降多少

function testFast(n) {
  let b
  for (let i = 0; i < n; i++) {
    // let a = parseInt(i)
    // b = (true) ? a : 0

    b = (true) ? parseInt(i) : 0
  }
}

// console.time('test')
// testFast(1000000)
// console.timeEnd('test')

// 对象数组去重
let arr = [1, 2, 3, 4, 5, 6, 7, 2, 1]
// console.log('[]:', uniquObject(arr))
// console.log('[]:', uniquSet(arr))
console.log('[]:', uniquIndexOf(arr))


function uniquIndexOf(arr) {
  let res = [], len = arr.length

  for (let i = len-1; i >= 0; --i) {
    let e = arr[i]
    console.log('[]:', arr.indexOf(e))
    if (arr.indexOf(e) < i && arr.indexOf(e) !== -1)
      continue
    else
      res.push(e)
  }

  return res.reverse()
}
function uniquSet(arr) {
  let set = new Set(), i = 0

  arr.forEach(e => set.add(e))
  arr = []
  set.forEach(e => arr[i++] = e)
  return arr
  // return Array.from(set) // IE不支持Array.from
}
function uniquObject(arr) {
  // 测试对象去重，复杂度O(n)
  let obj = Object.create(null)

  let len = arr.length
  for (let i = 0; i < len; ++i) {
    obj[arr[i]] = 1
  }

  arr = []
  for (e in obj) {
    arr.push(e)
  }
  return arr
}