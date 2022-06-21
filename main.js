// ----- console -----
// console.log('Hello World');
// console.error('This is error!');
// console.warn('Thi is warning');

// ----- var, let, const -----
// ----- Data Types (String, Numbers, Boolean, Null, undefined, Symbol) -----
// ----- concatenation -----
// ----- forEach, map, filter -----
// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     },
// ];

// todos.forEach(function(todo) {
//     console.log(todo.text);
// });

// const todoText = todos.map(function(todo) {
//     return todo.text;
// });
// console.log(todoText);

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// });
// console.log(todoCompleted);

// const todoCompleted1 = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// });
// console.log(todoCompleted1);

// ----- if, else if, else statement -----
// ----- switch case -----
// const x = 11;
// const color = x > 10 ? 'red' : 'blue';

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case ' blue':
//         crossOriginIsolated.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
// }

// ----- normal function -----
// function add_Number(num1, num2) {
//     return num1 + num2;
// }
//     console.log(add_Number(5, 5));

// function addNumber(num1, num2) {
//     console.log(num1 + num2);
// }
//     addNumber(15, 5);

// ----- arrow funtion -----
// const addNumber1 = (num1, num2) => {
//     return num1 + num2;
// }
//     console.log(addNumber1(15, 15));

// const add_Number1 = (num1, num2) => {
//     console.log(num1 + num2);
// }
//     add_Number1(20, 20);

// const addNumber2 = (num1, num2) => console.log(num1 + num2);
//     addNumber2(25, 25);

// const add_Number2 = (num1, num2) => num1 + num2;
//     console.log(add_Number2(35, 25));

// ----- constructor function -----
// /*
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }
// */

// ----- class -----
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// ----- instantiate object -----
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');
//     console.log(person1);
//     console.log(person2.getFullName());
//     console.log(person2.getBirthYear());

//----- Single element -----
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('h1'));


//----- Multiple elements -----
// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByClassName('container'));
// console.log(document.getElementsByTagName('li'));
// const items = document.querySelectorAll('.item');
//     items.forEach((item) => console.log(item));


// const ul = document.querySelector(".items");
//     ul.remove();
//     ul.lastElementChild.remove();
//     ul.firstElementChild.textContent = 'Hello';
//     ul.children[1].innerText = 'Brad';
//     ul.lastElementChild.innerHTML = '<h4>Hello</h4>';

// const btn = document.querySelector(".btn");
//     btn.style.background = 'black';
//     btn.addEventListener('click' , (e) => {
//         e.preventDefault();
//         console.log('click');
//         console.log(e);
//         console.log(e.target);
//         document.querySelector(".container").style.background = '#008';
//         document.querySelector("body").classList.add("bg-blue");
//         document.querySelector(".items").lastElementChild.innerHTML = '<h1>Hello</h1>'   
    // });

const myForm = document.querySelector("#my-form");
const NameInput = document.querySelector("#name");
const EmailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
    myForm.addEventListener('submit', onSubmit);
    function onSubmit(e) {
        e.preventDefault();

        if(NameInput.value === '' || EmailInput.value === '') {
            msg.classList.add('error')
            msg.innerHTML = 'Please enter all fields'

            setTimeout(() => msg.remove(), 3000);
        }
        else {
            const li = document.createElement('li');
            userList.appendChild(document.createTextNode(`${NameInput.value} : ${EmailInput.value}`))

            userList.appendChild(li);

            // clear fields
            NameInput.value = '';
            EmailInput.value = '';
        }
    }