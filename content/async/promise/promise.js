class MyPromise {
  value

  constructor(executor, timeout) {
    executor?.(this._resolve, this._reject)
  }

  then() {
    return this
  }

  catch() {
    return this
  }

  finally() {
    return this
  }

  _resolve(value) {
    
  }

  _reject(reason) {

  }
}

module.exports = MyPromise