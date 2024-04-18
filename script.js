//complete this code
class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}
	get name(){
		return this._name;
	}
	set age(newAge){
		this._age = newAge;
	}
	get age(){
		return this._age;
	}
}

class Student extends Person {
	constructor(name, age){
		super(name, age)
	}
	study(){
		console.log(this._name + " is studying");
	}
}

class Teacher extends Person {
	constructor(name, age){
		super(name, age)
	}
	teach(){
		console.log(this._name + " is teaching");
	}
}
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study();

const teacher = new Teacher("Bob", 40);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;