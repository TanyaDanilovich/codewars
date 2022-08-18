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

//https://www.codewars.com/kata/56e20642ddeb0f4fac000344/train/javascript

Array.prototype.map = function (func) {
  const res = [];
  this.forEach((element) => {
    res.push(func(element));
  });
  return res;
};
