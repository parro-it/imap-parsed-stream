let moduleRoot = '../es6';
if (process.env.TEST_RELEASE) {
  moduleRoot = '../dist';
}

const imapParsedStream = require(moduleRoot);

describe('imapParsedStream', () => {
  it('works', async () => {
    const result = await imapParsedStream();
    result.should.be.equal(42);
  });
});

