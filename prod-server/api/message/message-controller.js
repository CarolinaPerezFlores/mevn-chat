"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.deletedb = deletedb;
exports.index = index;
exports.remove = remove;
exports.search = search;
exports.update = update;

var _messajeModel = _interopRequireDefault(require("../../model/messaje-model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function index(req, res, next) {
  _messajeModel.default.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  }); // return res.json({message: 'hey!'});

}

function search(req, res, next) {
  _messajeModel.default.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

function create(req, res, next) {
  var message = new _messajeModel.default(req.body);
  message.save(function (err) {
    if (err) return handleError(err);
    return res.status(500).json();
  });
  return res.status(200).json(); // return res.json(req.body.message);
}

function update(req, res, next) {
  _messajeModel.default.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

function remove(req, res, next) {
  _messajeModel.default.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

function deletedb(req, res, next) {
  _messajeModel.default.deleteMany(function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}