'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = 5050;

app.use(_express2.default.static('dist'));
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/../public/index.html');
});

app.listen(PORT);
console.log('Listening on port: ' + PORT);
//# sourceMappingURL=server.js.map