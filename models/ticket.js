const { ObjectId } = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String,
        required: true,
        match: /[A-F][1-9]\d?/,
        unique: true
    },
    price: {
        type: Number,
        min: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Ticker', ticketSchema);