const employees = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jack', age: 32 },
    { name: 'Jill', age: 28 },
];
const getEmployees = (employees, age) => {
    return employees.filter((employee) => employee.age > age);
};
console.log('Employees above 30 years', getEmployees(employees, 30));
//# sourceMappingURL=index.js.map