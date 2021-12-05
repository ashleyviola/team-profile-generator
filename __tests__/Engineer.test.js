const Engineer = require('../lib/Engineer');

// create engineer object 
test('create engineer object', () => {
    const engineer = new Engineer('Ashley', 1, 'test@test.com', 'ashleyviola');

    expect(engineer.github).toEqual(expect.any(String));
})

// get github link
test ('get github link', () => {
    const engineer = new Engineer('Ashley', 1, 'test@test.com', 'ashleyviola');

    expect(engineer.getGithub()).toEqual(expect.any(String));
})
// get engineer role 
test('get engineer role', () => {
    const engineer = new Engineer('Ashley', 1, 'test@test.com', 'ashleyviola');

    expect(engineer.getRole()).toEqual(expect.any(String));
})