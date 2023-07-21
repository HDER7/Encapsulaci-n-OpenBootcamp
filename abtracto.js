class Person {
    constructor() {
        this._age = 0;
        this._name = "";
        this._phone = "";
    }

    get age() {
        return this._age;
    }

    get name() {
        return this._name;
    }

    get phone() {
        return this._phone;
    }

    set age(age) {
        this._age = age;
    }

    set name(name) {
        this._name = name;
    }

    set phone(phone) {
        this._phone = phone;
    }
}

function main() {
    const person = new Person();
    person.age = 19;
    person.name = "Heider";
    person.phone = "1234567890";

    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Phone: ${person.phone}`);
}

main();