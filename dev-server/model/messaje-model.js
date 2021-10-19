import Moongoos from 'mongoose';

const { Schema } = Moongoos;

  const messageSchema = new Schema({
    nickname: String,
    message: String,
    date: { type: Date, default: Date.now },
  });

  // export default mongoose.model('Message', messageSchema)
  module.exports = Moongoos.model('Message', messageSchema);