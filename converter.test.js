const converter = require('./converter.js');

test('$0.00 = ฿0', () => {
    expect(converter(0)).toEqual('$0.00');
});

test('$0.03 = ฿1', () => {
    expect(converter(1)).toEqual('$0.03');
});

test('$0.09 = ฿3', () => {
    expect(converter(3)).toEqual('$0.09');
});

test('$0.15 = ฿5', () => {
    expect(converter(5)).toEqual('$0.15');
});

test('$0.21 = ฿7', () => {
    expect(converter(7)).toEqual('$0.21');
});
