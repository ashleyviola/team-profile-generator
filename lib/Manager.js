const Employee = require('../lib/Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    getRole(){
        return `
        ${this.name} is a Manager.
        `;
    }
}
module.exports = Manager;