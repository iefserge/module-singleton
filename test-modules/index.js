var test = require('tape');

test('test-modules', function(t) {
  t.throws(function() {
    require('module1');
    require('module2');
  });
  t.end();
});
