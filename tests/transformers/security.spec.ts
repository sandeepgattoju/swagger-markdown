import { expect } from 'chai';
import { transformSecurity } from '../../src/transformers/security';

const fixture = [
  {
    security: [{
      auth: [],
    }],
    result: '##### Security\n\n'
            + '| Security Schema | Scopes |\n'
            + '| --- | --- |\n'
            + '| auth | |',
  }, {
    security: [{
      auth: ['write_pets', 'read_pets'],
    }],
    result: '##### Security\n\n'
            + '| Security Schema | Scopes | |\n'
            + '| --- | --- | --- |\n'
            + '| auth | write_pets | read_pets |',
  },
];

describe('Security transformer', () => {
  it('should transform security to the tables', () => {
    fixture.forEach((usecase) => {
      expect(transformSecurity(usecase.security)).to.be.equal(usecase.result);
    });
  });
});
