//1.
var integer =[]
for(var i=10 ; i<=20 ; i++){
    integer.push(i)
}
console.log("Orignal integer serise");
console.log(integer);

var integerSerise = integer.slice(5,8)
console.log("Extra range integer serise");

console.log(integerSerise);

//2.
var number = [1,2,3,4,5,6,7,8,9,10];

console.log(number);
var number_$ = number.splice(3,6)
console.log(number_$);

//3.
var store = ["cat","Dog","pet","frog"]
var store_$ = store.slice(0,1)
console.log(store_$);
store.shift()
console.log(store);

//4.
var main = [true,"star",100]
main.unshift(typeof false)
console.log(main);

//5.
var main_$ = [true,"star",100]
main_$.push(typeof 90)
console.log(main_$);

//6.
var mass = ["karachi","bawalpure","multan"]
var mass_$ = mass.slice(2,3)
console.log(mass_$);
mass.pop()
console.log(mass);


//7.
var givenArry = [0,9,8,7,6,5,4]
var name_4 = []
for(var i = 0 ; i< 3 ; i++){
    var name_4 = givenArry.shift();
}
console.log(givenArry);
console.log(name_4);
