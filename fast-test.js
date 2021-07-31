// let arr=[1,2,3,4,5,6,7]

// let ans=arr.some(item=>item===9)
// let ans=arr.every(e=>e>1)
// 纯遍历：forEach
// 条件遍历：map,filter,reduce
// 查询类：some,every,find

// console.log('[ans]:', ans)


// const fs = require('fs')

// const curr=fs.opendir('./',(err, dir)=>{
// })

// async function read(path) {
//   const dir = await fs.promises.opendir(path);
//   let tmp = []
//   for await (const dirent of dir) {
//     tmp.push(dirent.name)
//     // console.log('[dir]:', dirent.name)
//     console.log(dirent.name)
//   }
//   // console.log(tmp.sort())
// }

// read('./')

console.log('script start')

async function async1() {
  await async2()
  // await async3()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
// async function async3() {
//   console.log('async3 end')
// }

async1()

setTimeout(function () {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  // resolve()
})
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })

console.log('script end')


console.log('[]:', new Promise(resolve => {
  console.log('Promise')
}))