var expect = require('chai').expect,
    each = require('./');

describe('each.js', function() {
  describe('#each', function() {
    describe('when passed an array', function() {
      beforeEach(function() {
        arr = [1, 2, 3, 4, 5];
        sum = 0;

        each(arr, function(value) {
          sum += value;
        });
      });

      it('should sum an array of values', function() {
        expect(sum).to.equal(15);
      });

      it('the typeof sum should be a number', function() {
        expect(sum).to.be.an('number');
      });
    });
  });
});
