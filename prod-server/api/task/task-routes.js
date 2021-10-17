"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.post('/task', function (req, res) {
  res.send('post.task');
});
router.get('/task', function (req, res) {
  res.send('get.task');
});
router.get('/task:id', function (req, res) {
  res.send('get.id.task');
});
router.put('/task', function (req, res) {
  res.send('put.task');
});
router.delete('/task', function (req, res) {
  res.send('delete.task');
});
var _default = router;
exports.default = _default;