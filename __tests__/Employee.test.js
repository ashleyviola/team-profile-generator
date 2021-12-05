const Employee = require('../lib/Employee');

// creates employee object 
test('creates employee object', () => {
    const employee = new Employee ('Ashley', 1,'test@test.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

// gets employee name 
test('gets employee name', () => {
    const employee = new Employee ('Ashley', 1,'test@test.com');

    expect(employee.getName()).toEqual(expect.any(String));
})
// gets employee id 
test('gets employee id', () => {
    const employee = new Employee('Ashley', 1, 'test@test.com');

    expect(employee.getId()).toEqual(expect.any(Number));
})
// get employee email 
test('gets employee email', () => {
    const employee = new Employee('Ashley', 1, 'test@test.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
})