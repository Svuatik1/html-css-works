let data = [
  {
    _id: "5b5e3168c6bf40f2c1235cd6",
    index: 0,
    age: 39,
    eyeColor: "green",
    name: "Stein",
    favoriteFruit: "apple",
  },
  {
    _id: "5b5e3168e328c0d72e4f27d8",
    index: 1,
    age: 38,
    eyeColor: "blue",
    name: "Cortez",
    favoriteFruit: "strawberry",
  },
  {
    _id: "5b5e3168cc79132b631c666a",
    index: 2,
    age: 2,
    eyeColor: "blue",
    name: "Suzette",
    favoriteFruit: "apple",
  },
  {
    _id: "5b5e31682093adcc6cd0dde5",
    index: 3,
    age: 19,
    eyeColor: "green",
    name: "George",
    favoriteFruit: "banana",
  },
];

// task 1

function findTypes(...rest) {
  const array = [];
  for (let i = 0; i < rest.length; i++) {
    array.push(typeof rest[i]);
  }
  return array;
}
findTypes(1, "aaa", null);

// task 2

function executeForEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}
executeForEach([1, 2, 3], function (el) {
  console.log(el);
});

// task 3

function mapArray(array, func, executeforEach) {
  const newArray = [];
  executeForEach(array, (element) => {
    newArray.push(func(element));
  });
  return newArray;
}
mapArray([2, 5, 8], function (el) {
  return el + 3;
});

// task 4

function filterArray(array, func, executeforEach) {
  const newArray = [];
  executeForEach(array, (element) => {
    if (func(element)) newArray.push(element);
  });
  return newArray;
}
filterArray([2, 5, 8], function (el) {
  return el > 3;
});

// task 5

function getAmountOfAdultPeople(array) {
  let AmountOfAdultPeople = 0;
  filterArray(array, (element) => {
    if (element.age > 18) AmountOfAdultPeople += 1;
  });
  return AmountOfAdultPeople;
}
getAmountOfAdultPeople(data);

// task 6

function getGreenAdultBananaLovers(array) {
  const greenAdultBananaLoversArray = [];
  mapArray(array, (element) => {
    if (
      element.age > 18 &&
      element.favoriteFruit === "banana" &&
      element.eyeColor === "green"
    )
      greenAdultBananaLoversArray.push(element.name);
  });
  return greenAdultBananaLoversArray;
}
getGreenAdultBananaLovers(data);

// task 7

function keys(obj) {
  const newArray = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newArray.push(`${key}`);
    }
  }
  return newArray;
}
keys({ keyOne: 1, keyTwo: 2, keyThree: 3 });
// task 8

function values(obj) {
  const array = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      array.push(`${obj[key]}`);
    }
  }

  return array;
}
values({ keyOne: 1, keyTwo: 2, keyThree: 3 });

// task 9

function showFormattedDate(date) {
  let dateString = date.toDateString();
  let month = dateString.substr(4, 3);
  let year = date.getFullYear();
  return `Date: ${date.getDate()} of ${month}, ${year}`;
}
showFormattedDate(new Date("2019-01-27T01:10:00"));

// task 10

function isEvenYear(date) {
  let year = date.getFullYear();
  return year % 2 == 0;
}
isEvenYear(new Date("2023-01-27T01:10:00"));

// task 11

function isEvenMonth(date) {
  let month = date.getMonth() + 1;
  return month % 2 == 0;
}
isEvenMonth(new Date("2019-02-27T01:10:00"));
