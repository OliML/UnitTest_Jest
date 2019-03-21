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