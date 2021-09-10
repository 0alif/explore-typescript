const city: string = "Dhaka";
const fruits: string[] = ["mango", "banana", "apple"];

type person = { name: string; age: number; salary: number }

const student: person = {
  name: "Kamal Atartuk",
  age: 115,
  salary: 4500,
};
const emploie: person = {
  name: 'Solaiman',
  age: 29,
  salary: 1000
}

function getSalary(player: { name: string, salary: number }): number {
  return player.salary;
}

getSalary({ name: 'Kuddus', salary: 50 });


function getSalary2(player: person): number {
  return player.salary;
}
