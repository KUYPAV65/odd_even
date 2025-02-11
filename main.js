class NumberChecker {
    constructor() { }

    // Polymorphic function to check if numbers are odd or even
    checkOddEven(input) {
        if (typeof input === 'number') {
        return input % 2 === 1 ? 'Odd':'Even'; 
        }
        else if (Array.isArray(input)){
            return input.map(num => (typeof num === 'number' ? (num % 2 === 0 ? 'Even' : 'Odd') : ''));
        }
        else {
            'Invalid input'
        }
    }

}

// Instructor's test cases
// ===== ===== ===== ===== =====

const numberChecker = new NumberChecker();

console.log(numberChecker.checkOddEven(5));
// Expected Output: Odd
console.log(numberChecker.checkOddEven(10));
// Expected Output: Even
console.log(numberChecker.checkOddEven([3, 5, 7, 10]));
// Expected Output: ['Odd', 'Odd', 'Odd', 'Even']
console.log(numberChecker.checkOddEven('Hello'));
// Expected Output: Invalid input