

var waz = require('../lib/waz/waz');
waz.parse(process.argv);
if (waz.args.length == 0) {
    waz.parse(['', '', '-h']);
}
