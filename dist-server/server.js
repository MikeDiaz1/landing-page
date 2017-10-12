'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = 5050;

app.use('/', _express2.default.static(_path2.default.join(__dirname, '/../dist')));
app.get('*', function (req, res) {
    res.sendFile(_path2.default.resolve(_path2.default.join(__dirname + '/../dist/index.html')));
});

app.listen(PORT);
console.log('Listening on port: ' + PORT + ' | localhost:' + PORT);
//# sourceMappingURL=server.js.map