
// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Make a variable and assign an even number to that variable.
//  Make sure that variable cannot be changed.
const evenNumber = 10;
// 2. Make a variable and assign a negative odd number to that variable. 
// Make sure that variable cannot be changed.
const oddNegativeNumber = -11;
// 3. Make a variable and assign a string to that variable using double quotes.
// Make sure that variable cannot be changed.
const stringDoubleQuotes = "Hello";
// 4. Make a variable and assign a string to that variable using single quotes.
// Make sure that variable cannot be changed.
const stringSingleQuotes = 'World';
// 5. Make a variable and assign a string to that variable using a template literal. 
// Make sure that variable cannot be changed.
const stringTemplateLiteral = `I am template `;
// 6. Make a variable and assign an empty string to that variable using a template literal.
// Make sure that variable *can* be changed.
let stringTemplateLiteralChanged = ``;
// 7. Make a variable and assign a boolean to that variable using a template literal. 
// Make sure that variable *can* be changed.
let booleanFirstChanged = !`Hi`;
// 8. Make a variable and assign a boolean to that variable using a template literal.
// Make sure that variable can not be changed.
const booleanFirstConst = !!`Hi again`;
// 9. Print the `type` of a variable that has a number value.
console.log(typeof evenNumber,typeof oddNegativeNumber)
// 10. Print the `type` of a variable that has a string value.
console.log(typeof stringDoubleQuotes, typeof stringSingleQuotes, typeof stringTemplateLiteral);
// 11. Print the `type` of a variable that has a boolean value.
console.log(typeof booleanFirstChanged, typeof booleanFirstConst);

