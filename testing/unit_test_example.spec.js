const  {sum, divide, subtract} = require('./unit_test_example')

//Unit Testing
//test Runner
test('sum function test', () => {
    expect(sum(2,1)).toBe(3)
    expect(sum(-5,1)).toBe(-4)
})