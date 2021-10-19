"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setEnvironvent = setEnvironvent;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setEnvironvent(app) {
  if (process.env.NODE_ENV !== 'production') {
    setDevEnv(app);
  } else {
    setProdEnv(app);
  }
}

function setDevEnv(app) {
  process.env.NODE_ENV = 'development';
  process.env.DB_URL = 'mongodb://localhost:27017/vue-db';
  console.log("Setting development environment");
  app.use(_express.default.json());
  app.use((0, _morgan.default)('dev'));
  app.use((0, _cors.default)());
}

function setProdEnv(app) {
  process.env.DB_URL = 'mongodb://localhost:27017/prod-db';
  app.use(_express.default.json());
  app.use(_express.default.static(__dirname + '/../dist'));
}