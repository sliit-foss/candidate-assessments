const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmailsSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Emails = mongoose.model("emails", EmailsSchema);
module.exports = Emails;