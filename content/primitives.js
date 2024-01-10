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
      '----------------------',
      'typeof NaN            // "number" (NaN is Not a Number)',
      'typeof undeclaredVar  // "undefined" (undeclaredVar is never declared)',
      'typeof Infinity       // "number" (Infinity, -Infinity, -0 are all valid numbers in Javascript)',
      'typeof null           // "object" (This stands since the beggining of Javascript)',
      'typeof /regex/        // "object" (regular expressions start and end with "/" in literal form)',
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
      '----------------------',
      '// strings and numbers',
      '"1" + 2                        // "12"',
      '"1" + "2" + "3"                // "123"',
      '"1" + "2" + 3 + 4              // "1234"',
      '"1" + "2" + (3 + 4)            // "127"',
      '"One" + 1                      // "One1"',
      '----------------------',
      '// mix of string and numbers',
      '1 + 2 + "3" + "4" + 5 + 6      // "33456"',
      '1 + 2 + "3" + "4" + (5 + 6)    // "33411"',
      '"1" + "2" + (3 + 4) + 5 + "6"  // "12756"'
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
      '-----------------------',
      '// string to number conversion',
      'const str = "12"',
      'Number(str)    // 12',
      '+str           //12',
      'parseInt(str)  // 12'
    ]
  }
]