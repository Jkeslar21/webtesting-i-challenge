const enhancer = require('./enhancer.js');
// test away!

// Test Case Succeed
it('if enhancement is less than 20, increase by 1', () => {
    expect(enhancer.succeed(item)).toBe(item.enhancement++ || item.enhancement )
})

// Test Case Fail
it ('enhancementFailure', () => {
    expect(enhancer.fail(item)).toBe((item.durability =- 5) || (item.durability =- 10 && item.enhancement--) || (item.durability =- 10) )
})

// Test Case Repair
it('should restore durabilty', () => {
    expect(enhancer.repair(item)).toBe(item.durability === 100)
})

const item = {
    durability: 91,
    enhancement: 11,
    name: 'arrow'
}
// Test Case Get STRETCH
// it('getWorks', () => {
//     console.log(item)
//     expect(enhancer.get(item)).toBe('arrow')
// })
