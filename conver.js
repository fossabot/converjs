class conver {
    constructor(){}
    jsonParse(text) {
        return JSON.parse(text);
    }
    jsonStringify(object) {
        return JSON.stringify(object);
    }
    toCelsius(fahrenheit) {
        var fahrTemp = fahrenheit;
        var cTemp = (fahrTemp - 32) / 1.8;

        if (cTemp < .5) return Math.floor(cTemp);
        else return Math.round(cTemp);
    }
    toFahrenheit(celsius) {
        var cTemp  = celsius;
        var cToFahr = cTemp * 9 / 5 + 32;
        return cToFahr;
    }
    HexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
    }
    RgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    TextToBinary(text) {
        let r = '';
        r = text.split('').map(char => {
            return char.charCodeAt(0).toString(2);
        }).join(' ');
        return r;
    }
    BinaryToText(binary) {
        var inside = binary.split(' ');
        var r = [];

        for (var i = 0; i < inside.length; i++) {
            r.push(String.fromCharCode(parseInt(inside[i], 2)));
        }
        return r.join('');
    }
    MsToDate(ms) {
        const date = new Date(ms);
        const r = date.toLocaleString();
        return r;
    }
    DateToMs(date) {
        return Date.parse(date);
    }
    Base64Encode(text) {
        return Buffer.from(text).toString('base64');
    }
    Base64Decode(text) {
        return Buffer.from(text, 'base64').toString('ascii');
    }
    Currency(opts = { "price": Number, "from": String, "to": String }) {
        const req = require('xmlhttprequest').XMLHttpRequest;
        const http = new req();
        http.open('GET', 'https://quoteapi.webull.com/api/quote/market/mi/foreignExchangesRates', false);
        http.send();
        var res = JSON.parse(http.responseText);
        for (var i = 0; i < res["rate"].length; i++) {
            if (res["rate"][i]["n1"] == opts.from && res["rate"][i]["n2"] == opts.to) {
                return res["rate"][i]["r"] * opts.price;
            }
        }
    }
    FileStream(opts = { "text": String, "filename": String, "exportAs": String }) {
        const fs = require('fs');
        fs.writeFile(`./${opts.filename}.${opts.exportAs}`, opts.text, function (err) {
            if (err) console.log(err);
            console.log(`File successfully saved as ${opts.filename}.${opts.exportAs} !`);
        })
    }

    MDtoHTML(markdown) {
        const html = markdown
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
        .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
        .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
        .replace(/\*\*\*(.*)\*\*\*/gim, '<strong><em>$1</em></strong>')
		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
        .replace(/\*(.*)\*/gim, '<i>$1</i>')
        .replace(/^\> (.*)/gim, '<blockqoute>$1</blockquote>')
        .replace(/\`(.*)\`/gim, '<code>$1</code>')
        .replace(/\[(.*?)\]\((.*?) \"(.*?)\"\)/gim, '<a href="$2" title="$3">$1</a>')
        .replace(/\!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1">')

        return html.trim();
    }
}

module.exports = conver;