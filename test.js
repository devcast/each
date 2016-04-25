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

      describe('when passed an empty array', function() {
        it('should not return the sum', function() {
          sum = null;

          expect(sum).not.to.eql(15);
        });
      });
    });

    describe('when passed an object', function() {
      it('should iterate in property and value', function() {
        each({name: 'Felquis'}, function(value, property) {
          expect(value).to.equal('Felquis');
          expect(property).to.equal('name');
        });
      });

      describe('when passed a {}', function() {
        it('should throw an ArgumentError', function() {
          each({}, function(value, property) {
            expect(property).to.throw(ArgumentError);
          });
        });
      });
    });
  });
});
