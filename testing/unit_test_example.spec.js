const  {sum, divide, subtract} = require('./unit_test_example')

//Unit Testing
//test Runner
test('sum function test', () => {
    expect(sum(2,1)).toBe(3)
    expect(sum(-5,1)).toBe(-4)
})


test('subtract function test', () => {
    expect(subtract(2,1)).toBe(1)
    expect(subtract(-5,1)).toBe(-6)
    expect(subtract(0,1)).toBe(-1)
})


test('divide function test', () => {
    expect(divide(9,3)).toBe(3)
    expect(divide(-4,1)).toBe(-4)
    expect(divide(12,3)).toBe(4)
    expect(divide(0,12)).toBe(0)
})