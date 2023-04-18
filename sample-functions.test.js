const myFunctions = require('./sample-functions.js');

// Test for function sum
test('Testing sum -- success', () => {
  const target = 30;
  const result = myFunctions.sum(12, 18);
  expect(target).toBe(result);
});


// Tests for function div
test('Testing div -- divide by 0', () => {
    const res = myFunctions.div(10, 0);
    const target = Infinity;
    expect(res).toBe(target);
})

test('Testing div -- test1', () => {
    const res = myFunctions.div(0, 10);
    const target = 0;
    expect(res).toBe(target);
})

test('Testing div -- test2', () => {
    const res = myFunctions.div(20, 5);
    const target = 4;
    expect(res).toBe(target);
})

test('Testing div -- test3', () => {
    const res = myFunctions.div(-25, 5);
    const target = -5;
    expect(res).toBe(target);
})


// Test for function containsNumbers
test('test1', () => {
    const txt = 'abc123'
    const res = myFunctions.containsNumbers(txt);
    expect(res).toBeTruthy();
})

// This test case is true, but there is a bug on the code.
test('test2', () => {
    const txt = ' '
    const res = myFunctions.containsNumbers(txt);
    expect(res).toBeFalsy();
})

test('test3', () => {
    const txt = 'abc'
    const res = myFunctions.containsNumbers(txt);
    expect(res).toBeFalsy();
})

test('test4', () => {
    const txt = '123'
    const res = myFunctions.containsNumbers(txt);
    expect(res).toBeTruthy();
})

test('test5', () => {
    const txt = '@!$'
    const res = myFunctions.containsNumbers(txt);
    expect(res).toBeFalsy();
})