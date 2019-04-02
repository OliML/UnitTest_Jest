const Util = require('./math');

describe('Factorial', function () {

    test.each([
        [0, 1],
        [1, 1],
        [2, 2],
        [3, 6],
        [4, 24],
        [5, 120],
    ])(
        'Factorial %i equals to %i',
        (n, expected) => {
            expect(Util.factorial(n)).toBe(expected);
        },
    );

    test('Factorial of negative integers throws exception', () => {
        expect(() => {
            Util.factorial(-10)
        }).toThrow();
    })

    test('Factorial of number > 100', () =>{
        expect(() => {
            Util.factorial(101)
        }).toThrow();
    })

    test('Factorial of not a number', () =>{
        expect(() => {
            Util.factorial('Olivier')
        }).toThrow();
    })
});

describe('is Prime', function () {
    test.each([
        [-1, false],
        [1, false],
        [2, true],
        [3, true],
        [6, false],
        [11, true],
        [19, true],
    ])(
        '%i is' + ('%s' == false ? '' : ' not') + ' prime',
        (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        },
    );
});

describe('Sum Prime', function () {

    test.each([
        [0, 0],
        [1, 0],
        [3, 5],
        [6, 10],
        [8, 17],
        [10, 17],
        [12, 28]

        ])(
        'sumPrime of %s is %s',
        (n, expected) => {
            expect(Util.sumPrime(n)).toBe(expected);
        },
    );
});

describe('Fizz Buzz', function () {
    test('Fizz Buzz 15', () => {
        const data = Util.fizzBuzz(15);
        expect(data).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
    });
});


describe('Cipher', function () {
    test('Cipher Test unitaire', () => {
        const expected = "Uftu Vojubjsf ba";
        const actual   = Util.cipher("Test Unitaire az");
        expect(actual).toEqual(expected);
    });
});

