var mattock = require('./index')('./test_plugins'),
    assert = require('assert');

describe('mattock', function(){
  it('should dig into nested directories and require the modules', function(){
    assert.equal(true, typeof mattock[0] === 'object');
    assert.equal(true, mattock[0].one === 1);
    assert.equal(true, mattock[0].str === 'Hello World');
    assert.equal(true, typeof mattock[0].fn === 'function');
    assert.equal(true, mattock[1] === 2);
  });
});
