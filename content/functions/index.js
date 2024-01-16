import {forEach} from '../functions/array'
import {call, bind} from '../functions/function'

export const content = [
  {
    title: 'Write your own implementation of "Array.prototype.forEach"',
    data: [
      'Array.prototype.forEach2 = ',
      `  ${forEach}`
    ],
  },
  {
    title: 'Write your own implementation of "Function.prototype.call"',
    data: [
      'Function.prototype.call2 = ',
      `  ${call}`,
    ]
  },
  {
    title: 'Write your own implementation of "Function.prototype.bind"',
    data: [
      'Function.prototype.bind2 = ',
      `  ${bind}`,
    ]
  }
]