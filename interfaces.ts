interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    previousClub?: string[]
}

const messi: Player = {
    name: 'L Messi',
    club: 'Abahoni',
    salary: 1200,
    wife: 'Nosimon ara begum'
}
const hannan: Player = {
    name: 'A. Hannan',
    club: 'Kolabagan',
    salary: 2000
}


interface Employee {
    name: string,
    designation: string,
    salary: number,
    age: number
}

interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number
}

const zuku: Developer = {
    name: 'Zukarberg',
    salary: 1100,
    age: 31,
    designation: 'Facebooker',
    language: 'js',
    codeEditor: 'VS Code',
    typingSpeed: 65
}