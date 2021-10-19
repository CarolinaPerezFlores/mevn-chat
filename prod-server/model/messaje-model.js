"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var messageSchema = new Schema({
  nickname: String,
  message: String,
  date: {
    type: Date,
    default: Date.now
  }
}); // export default mongoose.model('Message', messageSchema)

module.exports = _mongoose.default.model('Message', messageSchema);