const Intern = require('../lib/Intern');
// create intern object
test('creates intern object',() => {
    const intern = new Intern('Ashley', 1, 'test@test.com', 'Oakland');
    expect(intern.school).toEqual(expect.any(String));
})

// gets intern role
test('gets intern role', () => {
    const intern = new Intern('Ashley', 1, 'test@test.com', 'Oakland');
    expect(intern.getRole()).toEqual(expect.any(String));
})