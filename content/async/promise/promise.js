// export class MyPromise {
//   value
//   reason

//   thenQueue = []
//   catchQueue = []
//   finallyQueue = []

//   constructor(executor, timeout) {
//     try {
//       executor?.(this._resolve.bind(this), this._reject.bind(this))
//     } catch (e) {
//       this._reject(e)
//     } finally {
//       (this.finallyQueue.pop())?.()
//     }
//   }

//   then(callback) {
//     this.thenQueue.push(callback)
//     return this
//   }

//   catch(callback) {
//     this.catchQueue.push(callback)
//     return this
//   }

//   finally(callback) {
//     this.finallyQueue.push(callback)
//     return this
//   }

//   _resolve(value) {
//     this.thenQueue.forEach(thenCallback => {
//       const result = thenCallback(value)
//       if (result != null) {
//         value = result
//       }
//     })
//   }

//   _reject(reason) {
//     const latestCall = this.catchQueue.pop()
//     latestCall?.(reason)
//   }
// }

// // module.exports = MyPromise

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
    if (this.state === PENDING_STATE) {
      if (onFulfilled) {
        this.thenQueue.push(onFulfilled)
      }
      if (onRejected) {
        this.catchQueue.push(onRejected)
      }
    }

    if (this.state === FULFILLED_STATE && onFulfilled) {
      onFulfilled(this.result)
    }

    if (this.state === REJECTED_STATE && onRejected) {
      onRejected(this.result)
    }

    return this
  }
}