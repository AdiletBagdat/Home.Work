//подготовка по js

const user = { name: "John", age: 33 };

function hadAge(object) {
    if (object.age == undefined) return false
    return true
}

console.log(hadAge(user));

const salaries = { Ivan: 10, Mila: 40, Egor: 5, Alisher: 20}

function Sumsalaries(obj) {
    for(value of salaries) {
        if (obj[value] == 'number') {
            return obj[value] *= 2
        }
    }
}

const user2 = [{ name: "Vasya", age: 27 }, { name: "Kolya", age: 30 }, { name: "Anna", age: 17 }];
 
let Name2Search = "Kolya";

let user2Name = user2.filter(function(val) {
  return val.name == Name2Search;
})[0];
 

const menu = { width: 100, height: 300, title: 'menu'}

multiply(menu)

function multiply(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2
        }
    }  
};

const user3 = { name: 'Ivan', married: true, age: 27, friends:[ Igor, Kolya ], company: { name: 'JustCode', salary: 1}}
function deleteOb(obj) {
    if (user3 == obj) {
        return deleteProperty(obj)
    }
}
