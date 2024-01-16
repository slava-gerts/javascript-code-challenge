export function bind(thisArg, ...args) {
  if (typeof this !== 'function') {
    throw new Error('The caller must be a function')
  }

  const boundFunc = this
  return function bound(...args2) {
    return boundFunc.call(thisArg, ...args.concat(args2))
  }
}