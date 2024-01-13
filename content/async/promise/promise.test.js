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

  it('should pass the data to then when resolve called', async () => {
    const data = 3
    const promise = new MyPromise((resolve) => setTimeout(() => resolve(data)))

    const result = await promise.then(n => n).then(n => n * 2)

    expect(result).toEqual(6)
  })
})