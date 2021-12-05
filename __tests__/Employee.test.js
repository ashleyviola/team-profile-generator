const Employee = require('../lib/Employee');

// creates employee object 
test('creates employee object', () => {
    const employee = new Employee ('Ashley', '1','test@test.com');

    expect(employee.name).toBe('Ashley');
    expect(employee.id).toEqual('1');
    expect(employee.email).toBe('test@test.com');
})

// gets players name 


// gets players id 


// get players email 