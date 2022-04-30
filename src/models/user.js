const bcrypt = require('bcryptjs');
const mongoose = require('../database');


const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

UserSchema.pre('save', async function(next){
    const hash =  await bcrypt.hash(this.password, 8)

    this.password = hash

    next()
})


const User = mongoose.model('User', UserSchema);

module.exports = User;