
// 接口
interface Person {
    firstName: string;
    lastName: string;
}

// function greeter(person: string) {
//     return "Hello, " + person;
// }

function greeter(person: Person) {
    return "Hello, " + person.firstName + person.lastName;
}

// let user = [1,2,3];
// let user = "Jane User";
var user = {firstName:"Jane",lastName:"User"};

document.body.innerHTML = greeter(user);

// console.log(greeter(user));
