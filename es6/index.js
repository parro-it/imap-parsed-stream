import { Transform } from 'stream';
import { MailParser } from 'mailparser';

class Parser extends Transform {
  constructor() {
    super({ decodeStrings: true});
  }

  _transform(chunk, encoding, callback) {
    const mail = chunk.toString('utf8');
    const mp = new MailParser();
    mp.on('end', mailObject => {
      callback(null, JSON.stringify(mailObject));
    });
    mp.on('error', err => {
      callback(err);
    });
    mp.write(mail);
    mp.end();
  }
}

export default async function imapParsedStream() {
  return new Parser();
}
