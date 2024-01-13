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
    setTimeout(() => resolve(5))
  }).then(value => {
    console.log('Success: ', value)
    return value * 2
  }).then(value => {
    console.log('Success 2: ', value)
  })
})()