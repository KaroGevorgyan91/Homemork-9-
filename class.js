class Author {
    constructor(author, age, gender){
        this.name = author;
		this.age = age;
		this.gender = gender;
    }
	toString () { 
		return `${this.name} ${(this.age === undefined)? '': this.age} ${(this.gender === undefined)? '': this.gender}`; 
	}
	get name() {
    return this._name;
  }
  set name(x) {
    this._name = x;
  }
}
class Book extends Author{
	constructor(title, author ,price, quantity){
		super(author);
	    this.title = title;
		this.price = price;
		this.quantity = quantity
    }
	getProfit(){
		return this.price*this.quantity
	}
	toString = function() { 
		return `${this.name} ${this.title} ${this.price} ${this.quantity}`;
}
	get price() {
    return this._price;
  }
  set price(x) {
	this._price = x;
  }
}