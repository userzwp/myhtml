class People {
	constructor(name) {
		this.name = name
	}
	eat(){
		console.log(`${this.name} eat something`)
	}
	
}

class Student extends People {
	constructor(name,number) {
		super(name)
		this.number = number
		this.sayHi()
		this.eat()
	}
	sayHi(){
		console.log(`姓名 ${this.name} 学号${this.number}`)
	}
}

const str = new Student("我的",18)