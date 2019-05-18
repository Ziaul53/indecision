class Person{
    constructor(name = 'Anonymus', age = 0){
        this.name = name;
        this.age = age;
    }
    getDesc(){
        return `Hi. I am ${this.name}. I am ${this.age} years old.`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        super();
        return !!this.major;
    }
    getDesc(){
        return `Hi. I am ${this.name}. I am ${this.age} years old. My Dept. name is ${this.major}`;
    }
}

let obj = new Student('tofazzal', 23, 'Computer Science');
console.log(obj.getDesc());

let other = new Student();
console.log(other.getDesc());
