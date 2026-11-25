// there is 2 way to test our regex on the sentences in js
const regex = /mahdiyar/

//way 1:
regex.test("mahdiyar");
console.log(`🚀 ~ regex.test("mahdiyar")`, regex.test("mahdiyar"));

//way 2:
"mahdiyar".match(regex);
console.log(`🚀 ~ "mahdiyar".match(regex)`, "mahdiyar".match(regex));

//----------------- gregorian datetime regex sample
const gregorianRegex = /\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2}/;
console.log(gregorianRegex.test("10-10-1900 10:24:40"));



