import through2 from 'through2';
import { MailParser } from 'mailparser';

export default function imapParsedStream() {
  return through2.obj( (mail, encoding, callback) => {
    const mp = new MailParser();
    mp.on('end', mailObject => {
      callback(null, mailObject);
    });
    mp.on('error', err => {
      callback(err);
    });
    mp.write(mail);
    mp.end();
  });
}
