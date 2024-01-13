export function forEach(callback, thisArg) {
  if (this == null) {
    throw new Error('Cannot iterate over null or undefined')
  }

  if (typeof callback !== 'function') {
    throw new Error('Callback must be a function')
  }

  const array = this
  const context = arguments.length > 1 ? thisArg : array

  for (let i = 0; i < array.length; i++) {
    // check for empty items, for example [1,,3]
    if (i in array) {
      callback.call(context, array[i], i, array)
    }
  }
}

Array.prototype.forEach2 = forEach

const arr = new Array(5)
arr[0] = 1
arr[3] = 2
arr[4] = 6

console.log('Test forEach function')
arr.forEach2((item, index) => console.log(`${index} -> ${item}`), null)

Array.prototype.forEach2.call(1, item => console.log(item))