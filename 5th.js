
let dog={
"name":"Gold",Weight:20,color:"yellow"

}
console.log(typeof(dog))
console.log(dog)


dog.Height=5.6
console.log(dog)

    dog.breed="Golden retriever"
dog.name="Gold.D.Roger"
console.log(dog)

console.log(typeof(dog))  
Object.freeze (dog) 
dog.name="Luffy"
console.log(dog)
console.log(dog.name)

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}const myCar1 = new Car("jaguar", 2014);

console.log(myCar1.name)