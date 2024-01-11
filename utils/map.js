// export function map(array, callback, thisArg) {
//   if (array == null) {
//     throw new Error('Can`t iterate over undefined or null.')
//   }

//   if (typeof callback !== 'function') {
//     throw new Error('Provided callback is not a function.')
//   }

//   const context = arguments.length > 1 ? thisArg : array

//   for (let i = 0; i < array.length; i++) {
//     if (i in array) {
//       callback.call(context, array[i], i, array)
//     }
//   }
// }

export function mapJoin(array, callback, thisArg, joinChar = '') {
  const result = array.map(callback, thisArg)

  return result.join(joinChar)
}