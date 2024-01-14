import {MyPromise} from './promise'

export const content = [
  {
    title: 'Write your own implementation of "Promise"',
    data: [
      'const PENDING_STATE = "pending"',
      'const FULFILLED_STATE = "fulfilled"',
      'const REJECTED_STATE = "rejected"',
      ' ',
      `${MyPromise}`,
    ]
  }
]

;(async function f() {
  const promise = new MyPromise((resolve, reject) => {
    resolve(5)
  }).then(value => {
    return new MyPromise((resolve, reject) => {
      setTimeout(() => resolve(value + 'new promise'), 1000)
    })
  }).then(value => {
    console.log('Success 2:', value)
  })
})()