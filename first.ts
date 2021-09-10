/* 
let money = 5000;
let honey = '';
let funny = false;
 */

let money: number = 88;
let honey: string = "O my sweet heart honey dew dew peu peu";
let funny: boolean = true;

const age: number = 21;

function add(first: number, second: number): number {
  const result = first + second;
  return result;
}

const outout: number = add(10, 30);

function doubleConsole(number: number): void {
  console.log(2 * number);
}

// multi purpose
/* 
function add(first: number | string, second: number | string): number | string {
  const result: string | number = first + second;
  return result;
}
const output: number = add(10, 30);
const fullName = add("Adam", "Sand");
 */
