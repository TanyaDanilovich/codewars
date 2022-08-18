//www.codewars.com/kata/santaclausable-interface
https: function isSantaClausable(obj) {
  return 'functon' === typeof (obj.distributeGifts && obj.goDownTheChimney && obj.sayHoHoHo);
}

//https://www.codewars.com/kata/513e1e47c600c93cef000001/train/javascript
class Animal {
  constructor(name, animal) {
    this.name = name;
    this.type = animal;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}
