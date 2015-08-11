# imap-parsed-stream

A simple objectMode through stream that parse rfc822
formatted emails to objects, using [mailparser](https://github.com/andris9/mailparser)

## Installation

```bash
npm install --save imap-parsed-stream
```

## How it works

## Usage

```javascript
  import imapParsedStream from 'imap-parsed-stream'
  const parse = imapParsedStream();
  mailsStream
    .pipe(imapParsedStream)
    .pipe(concat({encoding: 'object'}, result => {
      // result is an array of parsed mail
    }));

```

## Example object output

```json
[
    {
        "headers": {
            "date": "Sat, 28 Dec 2013 07:12:01 -0800 (PST)",
            "subject": "Aggiungi una foto del profilo",
            "from": "\"Google+\" <noreply-bbf11161@plus.google.com>",
            "to": "imaptest73@gmail.com"
        },
        "subject": "Aggiungi una foto del profilo",
        "priority": "normal",
        "from": [
            {
                "address": "noreply-bbf11161@plus.google.com",
                "name": "Google+"
            }
        ],
        "to": [
            {
                "address": "imaptest73@gmail.com",
                "name": ""
            }
        ],
        "date": "2013-12-28T15:12:01.000Z"
    },{
        "headers": {
            "date": "Tue, 03 Dec 2013 14:05:25 -0800 (PST)",
            "subject": "I post più popolari della settimana su Google+",
            "from": "\"Google+\" <noreply-bbf11161@plus.google.com>",
            "to": "imaptest73@gmail.com"
        },
        "subject": "I post più popolari della settimana su Google+",
        "priority": "normal",
        "from": [
            {
                "address": "noreply-bbf11161@plus.google.com",
                "name": "Google+"
            }
        ],
        "to": [
            {
                "address": "imaptest73@gmail.com",
                "name": ""
            }
        ],
        "date": "2013-12-03T22:05:25.000Z"
    }
]

```

## License

The MIT License (MIT)
Copyright (c) 2015 Andrea Parodi
