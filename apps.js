var myPenguin = {
	firstName: "Wheezy",
	origin: "Toy's Story",
	canFly: false,
	chirp: "CHIRP CHIRP! Is this what penguins sound like?",
	sayHello: function() {
		return myPenguin.firstName + " , nice to meet you" 
	},
	fly: function() {
		return "No flying for me!"
	},
};
console.log("Hello, I'm a penguin and my name is " + myPenguin.firstName);
console.log(myPenguin.chirp);

myPenguin.firstName = "Penguin McPenguinFace";

console.log(myPenguin.sayHello());
console.log(myPenguin.fly());

myPenguin.canFly = true;

console.log(myPenguin.fly());

var key =` `;
var i;
for (i in myPenguin) {
    key = ` ` + i; 
}
console.log(key)

var value =` `;
var x;
for (x in myPenguin) {
    value = `${myPenguin[x]} `
}
console.log(value)
