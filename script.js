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

//www.codewars.com/kata/5f25f475420f1b002412bb1f/train/javascript
// the alphabet: 'abcdefghijklmnopqrstuvwxyz'
function findTheNumberPlate(customerID) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let unit = Math.trunc(customerID / 999);
  let remainder = (customerID % 999) + 1;

  let strID = '';
  let index1 = unit;
  let index2 = 0;
  let index3 = 0;

  if (unit < 26) {
    //console.log(1, 'index1', index1, 'index2', index2, 'index3', index3);
  } else {
    index1 = Math.trunc(unit % 26);
    index2 = Math.trunc(unit / 26);
    //console.log(2, 'index1', index1, 'index2', index2, 'index3', index3);
    if (index2 >= 26) {
      index2 = Math.trunc(index2 % 26);
      index3 = Math.trunc(index2 / 26) + 25;
      // console.log(3, 'index1', index1, 'index2', index2, 'index3', index3);
    }
  }
  strID = `${alphabet[index1]}${alphabet[index2]}${alphabet[index3]}`;
  let numID = remainder.toString().split('');
  while (numID.length < 3) {
    numID.unshift('0');
  }

  let strNumID = numID.join('');
  return strID + strNumID;
}
/* 
console.log('aaa004 ', findTheNumberPlate(3), findTheNumberPlate(3) === 'aaa004' ? 'OK' : 'NO');
console.log(
  'baa489 ',
  findTheNumberPlate(1487),
  findTheNumberPlate(1487) === 'baa489' ? 'OK' : 'NO',
);
console.log(
  'oba041 ',
  findTheNumberPlate(40000),
  findTheNumberPlate(40000) === 'oba041' ? 'OK' : 'NO',
);
console.log(
  'zzz999 ',
  findTheNumberPlate(17558423),
  findTheNumberPlate(17558423) === 'zzz999' ? 'OK' : 'NO',
);
console.log(
  'aja802 ',
  findTheNumberPlate(234567),
  findTheNumberPlate(234567) === 'aja802' ? 'OK' : 'NO',
); */

//www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
//Small enough? - Beginner
/* function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
} */

//https://www.codewars.com/kata/563089b9b7be03472d00002b/train/javascript
//Remove All The Marked Elements of a List
/* Array.prototype.remove_ = function (integer_list, values_list) {
  let res = [];
  let count = 0;
  res = integer_list.filter((intEl) => {
    count++;
    //return intEl !== 4;
    return !values_list.includes(intEl);
  });
  console.log(count);
  return res;
};
integer_list = [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8];
values_list = [1, 3, 4, 2];
l = new Array();
console.log(l.remove_(integer_list, values_list)); */

//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
//Shortest Word
function findShort(s) {
  let res = s.split(' ')[0].length;
  s.split(' ').forEach((word) => {
    word.length < res ? (res = word.length) : res;
  });
  return res;
}
