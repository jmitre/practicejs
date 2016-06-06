var dog = {name: 'fido', age: 7};//object literal
dog.weight = 100;
dog.toys = ['squeeqy', 'arbys', 'bones'];
console.log('dog:', dog);
var bones = dog.toys[2];

function Dog(name, age, weight){//upercase for constructor
  this.name = name;
  this.age = age;
  this.weight = weight;
}

Dog.prototype.speak = function(){
  console.log('woof, i am', this.name);
}

var d1 = new Dog('fido', 3, 50);
console.log('d1:', d1);
d1.speak();
