# ConverJS

Parse, convert strings, numbers etc. with ease.!

## Installation

`npm i converjs`

## Usage

```js
const converjs = require("converjs/conver.js");

const conver = new converjs();

// Methods   

conver.jsonParse('{"fruit": "apple"}');
// Result: { fruit: 'apple' }

conver.jsonStringify({fruit: "apple"});
// Result: {"fruit": "apple"}

conver.toCelsius(50);
// Result: 10

conver.toFahrenheit(10);
// Result: 50

conver.HexToRgb("#bf5e45");
// Result: { r: 191, g: 94, b: 69 }

conver.RgbToHex(191, 94, 69);
// Result: #bf5e45

conver.TextToBinary("Cool");
// Result: 1000011 1101111 1101111 1101100

conver.BinaryToText("1000011 1101111 1101111 1101100");
// Result: Cool

conver.DateToMs("2021-06-20 16:35");
// Result: 1624199700000

conver.MsToDate(1624199700000);
// Result: 20/06/2021, 16:35:00

conver.Base64Encode("You're cool!");
// Result: WW91J3JlIGNvb2wh

conver.Base64Decode("WW91J3JlIGNvb2wh");
// Result: You're cool!

conver.Currency({
    price: 100,
    from: "USD",
    to: "EUR"
})
// Result: 84.3028 (This might change when you try it.)

conver.FileStream({
  text: "I'm cool!",
  filename: "cool",
  exportAs: "txt" // or in any file format
})
// Result: A file.

conver.MDtoHTML("# I'm a big heading.")
// Result: <h1>I'm a big heading.</h1>
// This markdown parser currently supports:
/*
* All heading from h1 to h6 / #,##,### etc.
* Bold and Italic / *asd* , **asd**
* <strong><em> / ***asd***
* <blockqoute> / >
* <code> / `const me = require('you')`
* Links / [GOOGLE](https://www.google.com "MY BEST FRIEND")
* Images / ![GOOGLE](https://napidroid.hu/wp-content/uploads/google-logo-header-01.jpg)[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FTheMarci%2Fconverjs.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FTheMarci%2Fconverjs?ref=badge_shield)

*/
```
And that's all for now.
Thanks for downloading! 👍

## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FTheMarci%2Fconverjs.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FTheMarci%2Fconverjs?ref=badge_large)