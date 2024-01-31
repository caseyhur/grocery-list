var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard",
];

console.log(groceries.length);

// Delete duplicates
var deleteDupicates = function (list) {
  var cleanList = [];

  for (var item of list) {
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }

  return cleanList;
};

// Check length of new array
var newGroceries = deleteDupicates(groceries);
console.log(newGroceries.length);

// Create new list of grocery items
newGroceries.forEach(function (item, index) {
  console.log(`${index + 1} - ${item}`);
});