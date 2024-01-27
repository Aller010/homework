^([01]\d|2[0-3]):[0-5]\d$
^\(\+994\)\s?(\d{2}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}-\d{3}-\d{2}-\d{2}-\d{2})$

const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%&_])(?=.*\d)(?=.*[!?.,]).{8,16}$/;
console.log(passwordRegex.test("YourPassword123!")); 
const stringWithDigits = "Hello123";
const stringWithoutDigits = stringWithDigits.replace(/\d/g, 'D');
const stringWithNumbers = "Text with numbers 123";
const stringWithoutNumbers = stringWithNumbers.replace(/\b\d+\b/g, 'N');
const inputString = "This is a sample string";
const wordCount = inputString.split(/\s+/).length;