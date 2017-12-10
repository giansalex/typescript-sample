interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const user: Person = {firstName: 'gian', lastName: 'salas'};

console.log(greeter(user));