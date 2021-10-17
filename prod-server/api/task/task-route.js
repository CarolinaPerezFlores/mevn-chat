"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.post('/task');
router.get('/task');
router.get('/task:id');
router.put('/task');
router.delete('/task');