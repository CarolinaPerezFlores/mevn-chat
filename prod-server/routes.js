"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRoutes = registerRoutes;

var _taskRoutes = _interopRequireDefault(require("./api/task/task-routes"));

var _messageRoutes = _interopRequireDefault(require("./api/message/message-routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerRoutes(app) {
  // app.use('/api', taskRoutes);
  app.use('/api', _messageRoutes.default);
}