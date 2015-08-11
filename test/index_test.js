let moduleRoot = '../es6';
if (process.env.TEST_RELEASE) {
  moduleRoot = '../dist';
}

import concat from 'concat-stream';

/*eslint-disable */
const input =

`Date: Sat, 28 Dec 2013 07:12:01 -0800 (PST)
Subject: Aggiungi una foto del profilo
From: "Google+" <noreply-bbf11161@plus.google.com>
To: imaptest73@gmail.com



Date: Tue, 03 Dec 2013 14:05:25 -0800 (PST)
Subject: =?ISO-8859-1?Q?I_post_pi=F9_popolari_della_settimana_su_Google=2B?=
From: "Google+" <noreply-bbf11161@plus.google.com>
To: imaptest73@gmail.com



Date: Sat, 12 Oct 2013 17:39:49 +0200
From: "imaptest73@gmail.com" <imaptest73@gmail.com>
Subject: this is a test



`;
/*eslint-enable */
const imapParsedStream = require(moduleRoot);

describe('imapParsedStream', done => {
  it('works', async () => {
    const parse = await imapParsedStream();

    parse.pipe(concat({encoding: 'object'}, result => {
      console.dir(result)
      done();
    }));

    input.split('\n\n').forEach(m =>
      parse.write(m)
    );
    parse.end();


  });
});

