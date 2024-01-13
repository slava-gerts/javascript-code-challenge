const MyPromise = require('./promise')
 
describe('Promise', () => {
  it('should exist and to be typeof "function"', () => {
    const promise = new MyPromise()
    expect(promise).toBeDefined()
    expect(typeof Promise).toBe('function')
  })

  it('should call executor instantly', () => {
    const executor = jest.fn()
    const promise = new MyPromise(executor)
    expect(executor).toHaveBeenCalled()
  })
})