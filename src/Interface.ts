interface Persona {
    firstName: string;
    lastName: string;
}

function greeter(person: Persona) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const user: Persona = {firstName: 'gian', lastName: 'salas'};

console.log(greeter(user));