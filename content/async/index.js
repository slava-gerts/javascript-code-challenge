import {MyPromise} from './promise'

export const content = [
  {
    title: 'Write your own implementation of "Promise"',
    data: MyPromise
  }
]

;(async function f() {
  const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => reject(new Error('error')))
  }).then(value => {
    console.log('Success: ', value)
  }, error => {
    console.log('Error: ', error)
  }).then(value => {
    console.log(value)
  })
})()