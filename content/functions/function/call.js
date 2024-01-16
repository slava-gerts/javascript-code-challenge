export function call(thisArg, ...args) {
  if (typeof this !== 'function') {
    throw new Error('The caller must be a function')
  }

  const context = thisArg == null ? global : Object(thisArg)
  const funcName = Symbol('funcName')

  context[funcName] = this
  const result = context.funcName(...args)
  delete context[funcName]

  return result
}