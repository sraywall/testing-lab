const {
    returnTwo, 
    greeting, 
    add,
    multiply,
    divide,
    subtract
} = require('./functions')
// console.log(returnTwo())
test("returnTwo should return 2",()=>{
    expect(returnTwo()).toBe(2)
})

test('testing greeting',()=>{
    expect(greeting('James')).toBe("Hello, James.")
    expect(greeting('Jill')).toBe("Hello, Jill.")
})

test("testing add",()=>{
    expect(add(1,2)).toBe(3)
    expect(add(5,9)).toBe(14)
})

describe("Math functions",()=>{
    test("testing add",()=>{
        expect(add(19,2)).toBe(21)
        expect(add(15,2)).toBe(17)
    })

    test("testing multiply",()=>{
        expect(multiply(10,2)).toBe(20)
        expect(multiply(13,13)).toBe(169)
    })
    
    test("testing divide",()=>{
        expect(divide(10,5)).toBe(2)
        expect(divide(169,13)).toBe(13)
    })

    test("testing subtract",()=>{
        expect(subtract(19,5)).toBe(14)
        expect(subtract(49,7)).toBe(42)
    })
})