var expect = require('chai').expect,
    each = require('./');

describe('each.js', function() {
  describe('#each', function() {
    describe('when passed an array', function() {
      it('should sum an array of values', function() {
        arr = [1, 2, 3, 4, 5];
        sum = 0;

        each(arr, function(value) {
          sum += value;
        });

        expect(sum).to.equal(15);
      });
    });
  });
});
