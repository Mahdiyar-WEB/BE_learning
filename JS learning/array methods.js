// pop => remove from end
// push => add to end
// shift => remove from start
// unshift=> add from start
// splice for removing => splice(start index,count)
// splice for add => splice(index,0,value1,value2)
// **splice to add in the middle of array=> splice(array.length/2,0,value1,value2)
// **splice will changes will apply to array
// slice(start index, end index) => copy from array without change
// ** end index will not include in result
// ** slice will not change the array
// concat => merge two array => array1.concat(array2)
// indexOf => find the index of value inside the array
// **indexOf(value,?start index)
// **indexOf will start searching from the beginning of array
// lastIndexOf => works like indexOf but it will start searching from the end to start
// find => find the value from array and copy it to new array
// filter => find all of the items that match with filter condition
// findIndex => find the index of value with condition
// includes => check if array includes the desired value
// some => check does array have at least one item to passed the condition
// evert => check does all items in array passed the condition
// reduce
// sort => for sort the array values
// ** sort numbers from lower to upper number array.sort((a,b)=> a-b)
// ** sort numbers from upper to lower number array.sort((a,b)=> b-a)
// split => create an array based on text with desired letter
// join => create a text based on array with desired letter between them
// reverse => to reverse the array
// Array.isArray => to check validity of array


//------------------loops:

//1. for of
const items = [1, 2, 3, 4, 5];
for (const item of items) {
  console.log(item);
}

//2.forEach
const items2 = [1, 2, 3, 4, 5];
items2.forEach((item) => console.log(item));

//3.map
const items3 = [1, 2, 3, 4, 5];
items3.map((item) => console.log(item));
