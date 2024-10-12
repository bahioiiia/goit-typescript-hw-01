import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

function add(num1: number, num2: number) {
  return num1 + num2;
}
console.log(add(1, 2));
/* HW */
/*----------------1------------------- */
const age: number = 50;
const username: string = 'Max';
const toggle: boolean = true;
const empty: null = null;
const callback = (a: number) => { return 100 + a };
console.log(callback(age));
/*----------------2------------------- */
let person: [string, number];
person = [username, age];
console.log(person);
/*----------------3------------------- */
let value: string | number;
value = "Hello";
console.log(value);
value = 42;
console.log(value);
/*----------------4------------------- */
function showMessage(message: string): void {
  console.log(message);
}
showMessage(username);

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(calc(age, 2));

function customError(): never {
  throw new Error('Error');
}
//customError();
/*----------------5------------------- */
enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}
console.log(DayOfWeek[DayOfWeek.Monday], isWeekend(DayOfWeek.Monday));
console.log(DayOfWeek[DayOfWeek.Saturday], isWeekend(DayOfWeek.Saturday));
/*----------------6------------------- */

/*----------------7------------------- */
// Визначення типу функції, який приймає два числа та повертає число
type CallbackType = (num1: number, num2: number) => number;

// Функція, яка приймає два числа та функцію зворотного виклику, застосовує цю функцію до чисел та виводить результат
function calc1(param1: number, param2: number, callback: CallbackType): void {
  console.log('Result:', callback(param1, param2));
}

// Приклади використання calc з різними функціями зворотного виклику
calc1(1, 1, (num1, num2) => num1 + num2);
calc1(5, 10, (num1, num2) => num1 - num2);

/*----------------2.4------------------- */
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: User) {
  // Оновлення користувача
      const defaultUser: Userx = {
        name: '',
        surname: '',
        email: '',
        password: '',
    };
    return { ...defaultUser, ...initialValues };
}

const newUser = createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});

console.log(newUser);