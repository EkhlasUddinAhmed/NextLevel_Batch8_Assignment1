1.Public — Property can be accessed in every where. In the Respective class,
Child Class… every where.

Some Examples are:

class User {
public name: string;
public email: string;
constructor(name: string, email: string) {
this.name = name; this.email = email;
}
public greet(): string { return “Heloo ${this.name}”; }}

const ekhlas = new User("Ekhlas", "abc@gmail.com");
console.log(user.name);
console.log(user.greet());

Class Player extends User{
public skill:string;
constructor(name: string, email: string,skill:string) {
Super(name,email)
this.skill=skill
}
}

Const player1 =new Player (“Ekhlas”,”abc@gmail.com”,”Cricked”)

player1.name=”Ekhlas Uddin Ahmed” Name property can be accessed and changed here.


2.Private — property can only be used in respective class call. It can not be used outside the class where private property is created or initialized.

Some Examples are:

class Employee {
protected name: string;
private baseSalary: number;

constructor(name: string, baseSalary: number) {
this.name = name;
this.baseSalary = baseSalary;
}

getDetails() {
return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
}
}

const e1 = new Employee("Ekhlas Uddin Ahmed", 10000434342);

// console.log(e1.getDetails());

class Manager extends Employee {
private department: string;

constructor(name: string, baseSalary: number, department: string) {
super(name, baseSalary);
this.department = department;
}

getRoleInfo() {
return `Manager of ${this.department}: ${this.name}`;
}
}
const manager = new Manager("Alice", 50000, "Engineering");

manager.getDetails();
manager.getRoleInfo();

e1.baseSalary=1223 can not be accessed/reassigned/changed as it is private .

manager.baseSalary=1223 can not be accessed/reassigned/changed as it is private .


3.Protected — property can be used inside the class where it is declared and inside any child class that extends the parent class. It cannot be used outside the class, By instance of the class from outside, it cannot be used.

class Employee {
protected name: string;
private baseSalary: number;

constructor(name: string, baseSalary: number) {
this.name = name;
this.baseSalary = baseSalary;
}

getDetails() {
return `Employee: ${this.name}, Base Salary: ${this._baseSalary}`;
}
}

const e1 = new Employee("Ekhlas Uddin Ahmed", 10000434342);

// console.log(e1.getDetails());

class Manager extends Employee {
private department: string;

constructor(name: string, baseSalary: number, department: string) {
super(name, baseSalary);
this.department = department;
}

getRoleInfo() {
this.name="Changed Name" // Protected can be used/changed here
return `Manager of ${this.department}: ${this.name}`;
}
}
const manager = new Manager("Alice", 50000, "Engineering");

manager.getDetails();
manager.getRoleInfo();

e1.name="Bahar"
manager.name="Bahar" //[Property 'name' is protected and only accessible within class 'Employee' and its subclasses]

4.Readonly — property can be read from : inside the base class, inside child class, and outside the class, but it can only be assigned a value in two places: at the time of declaration, or inside the constructor of the class where it is declared.
It cannot be reassigned anywhere else: not inside other methods of the same class, not inside child classes, and not from outside the class.

class User {
readonly id: string;
public name: string;

constructor(id: string, name: string) {
this.id = id;
this.name = name;
}

changeName(newName: string): void {
this.name = newName; //Can be updated public property "Name"
this.id = "new"; // Can't be updated readonly property id
}
}

const user = new User("U001", "Ekhlas");

console.log(user.id); //Can be read readonly property "id"
user.changeName("Rahim"); // Can be updated public property "Name"
user.id = "U002"; // Can't be reassigned readonly property id

class Player extends User{
constructor(id:string,name:string){
super(id,name)
}
}
const player=new Player("123","Ekhlas");

player.id="12345656" // Can't be reassigned readonly property id

console.log(player.id) //Can be read readonly property "id"
