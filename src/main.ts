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

console.log(isWeekend(DayOfWeek.Monday));
console.log(isWeekend(DayOfWeek.Saturday));

/*----------------6------------------- */