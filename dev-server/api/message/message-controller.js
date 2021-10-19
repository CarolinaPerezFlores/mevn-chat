import Message from '../../model/messaje-model'

export function index(req, res, next){   
    Message.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
      });
    // return res.json({message: 'hey!'});
}

export function search(req, res, next) {
    Message.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    })
}

export function create(req, res, next) {
    const message = new Message(req.body);
    message.save(function (err) {
      if (err) return handleError(err);
      return res.status(500).json();
    });
      return res.status(200).json();
    // return res.json(req.body.message);
}

export function update(req, res, next) {
    Message.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
}

export function remove(req, res, next) {
    Message.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
}

export function deletedb(req, res, next) {
  Message.deleteMany(function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}