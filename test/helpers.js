import getCommonFactors from '../src/helpers/getcommonfactors.jsx';

var expect = require('chai').expect;

describe('getCommonFactors', () => {
    it('returns the factors expected for 24 and 33', () => {
        expect(getCommonFactors(24)).to.deep.equal([{x: 2, y: 12}, {x:3, y:8}, {x:4, y:6}]);
        expect(getCommonFactors(33)).to.deep.equal([{x: 3, y: 11}]);
    });
});
