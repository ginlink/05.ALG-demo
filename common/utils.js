module.exports = {
  swap(arr, a, b) {
    // 交换算法
    let tmp = arr[b]
    arr[b] = arr[a]
    arr[a] = tmp
  },

  deep_clone1(o) {
    // 适应深拷贝
    return rec(o)
    function rec(o) {
      if (typeof (o) !== 'object' || o === null || o === undefined || typeof (o) === 'function') return o

      if (o instanceof Array) {
        let tmp = []
        o.forEach(item => {
          tmp.push(rec(item))
        })

        return tmp
      } else if (o instanceof Object) {
        // 遍历类，这里要注意reg类型
        if (o instanceof RegExp) return o
        else {
          let obj = {}
          let keys = Object.keys(o)
          for (let i = 0; i < keys.length; i++) {
            obj[keys[i]] = rec(o[keys[i]])
          }
          return obj
        }
      }
    }
  },

  createArr(num = 100) {
    // 创造数组
    let tmp = []
    for (let i = 0; i < num; i++) {

      let item = Math.floor(Math.random() * 100)
      tmp.push(item)
    }

    return tmp
  }
}