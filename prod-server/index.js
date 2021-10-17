"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes");

var _env = require("./config/env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var port = 3000;
(0, _env.setEnvironvent)(app);
(0, _routes.registerRoutes)(app);
app.get('/', function (req, res) {
  res.send('Hello World! heey!');

  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running in development mode.');
  } else {
    return res.sendFile('index.html', {
      root: __dirname + '/../dist/'
    });
  }
});
app.listen(port, function () {
  console.log("Example listening at http://localhost:".concat(port) + ' ' + process.env.NODE_ENV + ' mode!');
});