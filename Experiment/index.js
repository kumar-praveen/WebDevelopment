function People(name,age){
    this.name=name;
    this.age=age;
    this.hack=function(){
        alert('Hacking laptop')
    }
}

let person1 = new People("Praveen",22)
console.log(person1.hack)