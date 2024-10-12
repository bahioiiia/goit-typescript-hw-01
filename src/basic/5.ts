/* Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і повертає boolean значення, що вказує, чи це день робочий чи вихідний. */

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