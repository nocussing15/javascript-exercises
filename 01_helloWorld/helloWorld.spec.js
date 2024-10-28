const helloWorld = require('./helloWorld');

describe('Hello World Function', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
