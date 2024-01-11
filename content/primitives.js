export const content = [
  {
    title: 'Show the usage of typeof operator on different types of values',
    data: [
      'typeof 50             // "number"',
      'typeof "text"         // "string"',
      'typeof true           // "boolean"',
      'typeof undefined      // "undefined"',
      'typeof function(){}   // "function"',
      'typeof 10n            // "bigint"',
      'typeof Symbol()       // "symbol"',
      'typeof [1, 2]         // "object"',
      'typeof {}             // "object"',
      ' ',
      'typeof NaN            // "number" (NaN is Not a Number)',
      'typeof undeclaredVar  // "undefined" (undeclaredVar is never declared)',
      'typeof Infinity       // "number" (Infinity, -Infinity, -0 are all valid numbers in Javascript)',
      'typeof null           // "object" (This stands since the beggining of Javascript)',
      'typeof /regex/        // "object" (regular expressions start and end with "/" in literal form)',
    ],
    preInformation: [
      'The "typeof" operator returns a string indicating the type of the operand'
    ],
    notes: 'Arrays and functions are sub type of objects',
    references: [
      {
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof'
      }
    ]
  },
  {
    title: 'Show the different ways of concatenating numbers and strings',
    data: [
      '// numbers and strings',
      '1 + "2"                        // "12"',
      '1 + 2 + "3"                    // "33"',
      '1 + 2 + "3" + "4"              // "334"',
      '1 + "One"                      // "1One"',
      ' ',
      '// strings and numbers',
      '"1" + 2                        // "12"',
      '"1" + "2" + "3"                // "123"',
      '"1" + "2" + 3 + 4              // "1234"',
      '"1" + "2" + (3 + 4)            // "127"',
      '"One" + 1                      // "One1"',
      ' ',
      '// mix of string and numbers',
      '1 + 2 + "3" + "4" + 5 + 6      // "33456"',
      '1 + 2 + "3" + "4" + (5 + 6)    // "33411"',
      '"1" + "2" + (3 + 4) + 5 + "6"  // "12756"'
    ],
    preInformation: [
      'Concatenation of strings and numbers is a common practical use case'
    ],
    references: [
      {
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators'
      }
    ]
  },
  {
    title: 'Show the conversion from number to string and vice versa',
    data: [
      '// number to string conversion',
      'const num = 12',
      'String(num)     // "12"',
      'num.toString()  // "12"',
      'num + ""        // "12"',
      ' ',
      '// string to number conversion',
      'const str = "12"',
      'Number(str)    // 12',
      '+str           // 12',
      'parseInt(str)  // 12'
    ],
    preInformation: [
      'Conversion between numbers and strings is a common practical use case'
    ],
    notes: 'If the number is floating, "parseFloat" can be used. "parseInt" and "parseFloat" are the methods present on the "Number" object also',
    references: [
      {
        href: 'https://javascript.info/type-conversions',
      }
    ]
  },
  {
    title: 'Write a code to operate on integer numbers outside the range of numbers in JavaScript',
    data: [
      '// assignment of big integers',
      'const bigNum1 = 1526688934595n',
      'const bigNum2 = 256489246848n',
      'const num3 = 1562365',
      ' ',
      'const bigSum = bigNum1 + bigNum2',
      'const bigDiff = bigNum1 - bigNum2',
      'const total = bigNum1 + bigNum2 + BigInt(num3)',
    ],
    preInformation: [
      'BigInt is a datatype in Javascript which facilitates the mathematical operations on huge value of integer number',
      'It is represented by a suffix "n" for number value'
    ],
    notes: 'The big integers cannot be operated directly with with normal number datatype. "10n + 20" is not allowed',
    references: [
      {
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt',
      }
    ]
  },
  {
    title: 'Show the usage of "||", "&&", "??" and "!!" with code examples',
    preInformation: [
      'The <strong>logical OR</strong> "||" operator for a set of operands is true if and only if one or more of its operands is true',
      'The <strong>logical AND</strong> "&&" operator for a set of operands is true if and only if all of its operands are true',
      'The <strong>nullish coalescing operator</strong> "??" is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand',
      'The <strong>double NOT</strong> "!!" operator used to explicitly force the conversion of any value to the corresponding boolean primitive',
    ],
    data: [
      'const num1 = 10',
      'const num2 = 20',
      ' ',
      'true || false                 // true',
      'false || false                // false',
      'false || num1                 // 10',
      '0 || num2                     // 20',
      '"text" || true                // "text"',
      'num1 > 0 || num2 < 0          // true',
      ' ',
      'true && true                  // true',
      'true && false                 // false',
      'true && num1                  // 10',
      'num1 && num2                  // 20',
      '"text" && num1 + num2         // 30',
      'num1 > 0 && num2 < 0          // false',
      ' ',
      'undefined ?? 10               // 10',
      'null ?? 20                    // 20',
      'false ?? num1                 // false',
      '0 ?? num2                     // 0',
      'null || undefined ?? "foo"    // raises a SyntaxError',
      'true && undefined ?? "foo"    // raises a SyntaxError',
      '(null || undefined) ?? "foo"  // "foo"',
      ' ',
      '!!10                          // true',
      '!!{}                          // true',
      '!!""                          // false',
      '!!0                           // false',
    ],
    notes: 'It is not possible to combine both the <strong>AND</strong> "&&" and <strong>OR</strong> operators "||" directly with "??"',
    references: [
      {
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR',
      },
      {
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND',
      },
      {
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator',
      },
      {
        href: 'https://developer.cdn.mozilla.net/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT',
      }
    ]
  },
  {
    title: 'Show the frequently and commonly used methods available on Number object with coding examples',
    preInformation: [
      '<strong>isInteger</strong> is used to check if the given number is integer or not',
      '<strong>parseInt</strong> is used to convert a given value in to integer',
      '<strong>parseFloat</strong> is used to convert a given value in to floating number',
      '<strong>isNaN</strong> is used to check if the given value is NaN or no',
      '<strong>toFixed</strong> is used to limit the number of digits after the decimal place. Returns a string representing this number using fixed-point notation',
      '<strong>toPrecision</strong> is used to limit the total number of digits to represent the number. Returns a string representing this number to the specified precision',
    ],
    data: [
      'Number.isInteger(1.5)          // false',
      'Number.isInteger(-15)          // true',
      ' ',
      'Number.parseInt("5.8")         // 5',
      'Number.parseInt("23px")        // 23',
      ' ',
      'Number.parseFloat("5.86")      // 5.86',
      'Number.parseFloat("-12.65x")   // -12.65',
      ' ',
      'Number.isNaN(NaN)              // true',
      'Number.isNaN("text" - 10)      // true',
      'Number.isNaN("text")           // false',
      ' ',
      '(56.369).toFixed(2)            // "56.37"',
      '(59).toFixed(3)                // "59.000"',
      ' ',
      '(32.458).toPrecision(3)        // "32.5"',
      '(98.1).toPrecision(1)          // "1e+2" (exponential notation might be returned in some circumstances)',
      '(0.000123).toPrecision(5)      // "0.00012300"'
    ],
    notes: '<strong>NaN</strong> is special type of number and this value is results by the invalid mathematical operations such as substraction of number and text',
    references: [
      {
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number'
      }
    ]
  },
  {
    title: 'Write the polyfill for "Number.isNaN"',
    preInformation: [
      'A polyfill is a piece of code used to provide modern functionality on older browsers that do not natively support it',
      'NaN is the only value which is not equal to itself and hence comparision operator cannot be used directly to check if a value is NaN',
    ],
    data: [
      'Number.isNaN = ',
      '  Number.isNaN ||',
      '  function isNaN(input) {',
      '    return typeof input === "number" && input !== input',
      '  }'
    ],
    notes: 'Even though the name says <i>Not a Number</i>, it is of type "number"',
    references: [
      {
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN'
      }
    ]
  },
  {
    title: 'Show the frequently and commonly used methods available on Math object with coding examples',
    preInformation: [
      '"abs" is used to get the absolute value of the given number',
      '"floor" is used to get the greatest integer smaller than or equal to the given number',
      '"ceil" is used to get the smallest integer greater than or equal to the given number',
      '"round" is used to round the given number to the nearest integer',
      '"max" is used to get the largest of zero or more numbers',
      '"min" is used to get the smallest of zero or more numbers',
      '"sqrt" is used to calculate the square root of the given number',
      '"pow" is used to calculate the power base on inputs',
      '"trunc" is used to limit the total number of digits to represent the number (method is present on prototype of Number)'
    ],
    data: [
      'Math.abs(-5)          // 5',
      'Math.floor(1.6)       // 1',
      'Math.ceil(2.4)        // 3',
      'Math.round(3.8)       // 4',
      'Math.max(-4, 5, 6)    // 6',
      'Math.min(-7, -2, 3)   // -7',
      'Math.sqrt(64)         // 8',
      'Math.pow(5, 3)        // 125',
      'Math.trunc(-6.3)      // -6'
    ],
    references: [
      {
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math'
      }
    ]
  },
  {
    title: 'How can we solve the problem of comparision of 0.1 + 0.2 with 0.3 where === operator fails',
    preInformation: [
      'JavaScript doesn’t define different types of numeric data types and always stores numbers as double precision floating point numbers, following the international IEEE 754 standard',
      'The addition of 0.1 and 0.2 will result in to 0.30000000000000004 and the comparision with 0.3 fails',
      'Number.EPSILON is 2<sup>-52</sup>, which can be used to verify if this decimal values are matching'
    ],
    data: [
      'function numbersCloseEnoughToEqual(a, b) {',
      '  return Math.abs(a - b) < Number.EPSILON',
      '}',
      ' ',
      'numbersCloseEnoughToEqual(0.1, 0.2)    // true'
    ],
    references: [
      {
        href: 'https://javascript.info/number#imprecise-calculations',
      },
      {
        href: 'https://www.programiz.com/javascript/library/number/epsilon',
      }
    ]
  }
]