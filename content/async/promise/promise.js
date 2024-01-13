const PENDING_STATE = 'pending'
const FULFILLED_STATE = 'fulfilled'
const REJECTED_STATE = 'rejected'

export class MyPromise {
  thenQueue = []
  catchQueue = []

  constructor(executor) {
    this.state = PENDING_STATE
    this.result

    try {
      executor?.(this._resolve.bind(this), this._reject.bind(this))
    } catch (e) {
      this._reject(e)
    }
  }

  _resolve(value) {
    const updated = this._updateState(FULFILLED_STATE)
    if (updated) {
      this.result = value

      this.thenQueue.forEach(callback => callback(value))
    }
  }

  _reject(reason) {
    const updated = this._updateState(REJECTED_STATE)
    if (updated) {
      this.result = reason

      this.catchQueue.forEach(callback => callback(reason))
    }
  }

  _updateState(newState) {
    // We can change state only once from "pending"
    if (this.state === PENDING_STATE) {
      this.state = newState
      return true
    }

    return false
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.state === PENDING_STATE) {
        if (onFulfilled) {
          this.thenQueue.push(() => {
            try {
              const newResult = onFulfilled(this.result)
              resolve(newResult)
            } catch (e) {
              reject(e)
            }
          })
        }
        if (onRejected) {
          this.catchQueue.push(() => {
            try {
              const newResult = onRejected(this.result)
              resolve(newResult)
            } catch (e) {
              reject(e)
            }
          })
        }
      }
  
      if (this.state === FULFILLED_STATE && onFulfilled) {
        try {
          const newResult = onFulfilled(this.result)
          resolve(newResult)
        } catch (e) {
          reject(e)
        }
      }
  
      if (this.state === REJECTED_STATE && onRejected) {
        try {
          const newResult = onRejected(this.result)
          resolve(newResult)
        } catch (e) {
          reject(e)
        }
      }
  
      return this
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }
}