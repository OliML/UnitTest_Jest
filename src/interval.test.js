const Interval = require('./interval');

describe('Constructor', function () {

    test('Constructor throws exception', () => {
        expect(() => {
            new Interval(10, 5);
        }).toThrow();
    });

    test('Constructor Ok', () => {
        expect(() => {
            new Interval(5, 10);
        }).not.toThrow();
    })

});

describe('Overlaps', function () {

    const interval = new Interval(1, 5);

    test.each([
        [new Interval(6, 10), false],
        [new Interval(-5, 0), false],
        [new Interval(4, 8), true],
        [new Interval(0, 4), true],
        [new Interval(2, 4), true],
        [new Interval(-1, 8), true],
        [new Interval(-2, 1), false],
        [new Interval(5, 10), false],
        [new Interval(1, 5), true],
        [new Interval(1, 1), false],
        [new Interval(5, 5), false]
    ])(
        'overlaps',
        (n, expected) => {
            expect(interval.overlaps(n)).toBe(expected);
        },
    );
});

describe('Includes', function () {

    const interval = new Interval(1, 5);

    test.each([
        [new Interval(6, 10), false],
        [new Interval(-5, 0), false],
        [new Interval(4, 8), false],
        [new Interval(0, 4), false],
        [new Interval(2, 4), true],
        [new Interval(-1, 8), false],
        [new Interval(-2, 1), false],
        [new Interval(5, 10), false],
        [new Interval(1, 5), true],
        [new Interval(1, 1), true],
        [new Interval(5, 5), true]
    ])(
        'includes',
        (n, expected) => {
            expect(interval.includes(n)).toBe(expected);
        },
    );
});

describe('Union', function () {

    const interval = new Interval(1, 5);

    test.each([
        [new Interval(6, 10), [new Interval(1,5), new Interval(6,10)]],
        [new Interval(-5, 0), [new Interval(-5,0), new Interval(1,5)]],
        [new Interval(4, 8), [new Interval(1,8)]],
        [new Interval(0, 4), [new Interval(0,5)]],
        [new Interval(2, 4), [new Interval(1,5)]],
        [new Interval(-1, 8), [new Interval(-1,8)]],
        [new Interval(-2, 1), [new Interval(-2,5)]],
        [new Interval(5, 10), [new Interval(1,10)]],
        [new Interval(1, 5), [new Interval(1,5)]],
        [new Interval(1, 1), [new Interval(1,5)]],
        [new Interval(5, 5), [new Interval(1,5)]]
    ])(
        'union',
        (n, expected) => {
            expect(interval.union(n)).toEqual(expected);
        },
    );
});

describe('Intersection', function () {

    const interval = new Interval(1, 5);

    test.each([
        [new Interval(6, 10), null],
        [new Interval(-5, 0), null],
        [new Interval(4, 8), new Interval(4,5)],
        [new Interval(0, 4), new Interval(1,4)],
        [new Interval(2, 4), new Interval(2,4)],
        [new Interval(-1, 8), new Interval(1,5)],
        [new Interval(-2, 1), new Interval(1,1)],
        [new Interval(5, 10), new Interval(5,5)],
        [new Interval(1, 5), new Interval(1,5)],
        [new Interval(1, 1), new Interval(1,1)],
        [new Interval(5, 5), new Interval(5,5)]
    ])(
        'intersection',
        (n, expected) => {
            expect(interval.intersection(n)).toEqual(expected);
        },
    );
});