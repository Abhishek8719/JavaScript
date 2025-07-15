
const myDate = new Date();

myDate.setFullYear(2025);
myDate.setMonth(8);  
myDate.setDate(15);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

const myDate2 = new Date(2025, 0,1);
console.log(myDate2.toString());
console.log(myDate2.toLocaleString());

console.log(Date.now());

myDate2.toLocaleString(`default`,{weekday:`long`})

console.log(myDate2.toLocaleString(`default`, { weekday: `long` }));






