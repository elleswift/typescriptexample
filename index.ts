let age: number = 49

// console.log("You're how old: ",age)
let firstName: string = "Damian"
let isTeaching: boolean = false

const classes: string[] = ["javascript", "typescript"]
let NumberOfStudents: number[] = [23,14]
NumberOfStudents.push(age);
// console.log(NumberOfStudents)


enum TaxForms {
  incomeTax=1099,
  ChildCare=244,
  BitcoinLoss=428,
  RichDude=378,
}

const WhichTaxForm = TaxForms.incomeTax
// console.log("use tax form: ",WhichTaxForm)


let postalcode:number | string = "L1P 9W2"   // Union
postalcode = 33436


function findIndex(index: number,arr:number[]): number {
  return arr[index]
}

// console.log(findIndex(1,NumberOfStudents))
let finalNumber: number = findIndex(1,NumberOfStudents)
console.log(finalNumber + 1)