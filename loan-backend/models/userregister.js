const mongoose = require('mongoose')
const UserRegister = new mongoose.Schema({
        name: { type: String, required: true },
        pass: { type: String, required: true },
        email: { type: String, required: true, unique: true, },
      },
      {
        versionKey: false,
      }
)

const UserModel = mongoose.model('userRegister',UserRegister)
module.exports = UserModel