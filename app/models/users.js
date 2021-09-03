const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema({
    ID: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    user: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        lowercase: true
    },

    password: {
        type: String
    },
    amountLoans: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
        enum: ['librarian', 'student', 'admin'],
        default: 'student'
    }
},
    {
        timestamps: true,
        versionKey: false
    })

module.exports = mongoose.model('users', UserScheme)