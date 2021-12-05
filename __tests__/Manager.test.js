const Manager = require('../lib/Manager');

// create manager object 
test('creates manager object', () => {
    const manager = new Manager('Ashley', 1 , 'test@test.com', 10);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

// gets manager role 
test('gets employee role', () => {
    const manager = new Manager('Ashley', 1 , 'test@test.com', 10);

    expect(manager.getRole()).toEqual(expect.any(String));
})