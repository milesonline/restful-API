const mongoose = require('mongoose');

const tutorSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter your title"]
    },
    f_name: {
        type: String,
        required: [true, "Please enter your first name"]
    },
    l_name: {
        type: String,
        required: [true, "Please enter your last name"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"]
    },

    number: {
        type: String,
        required: [true, "Please enter your number"]
    },

    address: {
        type: String,
        required: [true, "Please enter your address"]
    },

    line_2: {
        type: String,
        required: [true, "Please enter your address"]
    },

    town: {
        type: String,
        required: [true, "Please enter your address"]
    },

    county_city: {
        type: String,
        required: [true, "Please enter your address"]
    },

    eircode: {
        type: String,
        required: [true, "Please enter your address"]
    }
}, {
    timestamps: true,
})

const Tutor = mongoose.model('Tutor', tutorSchema);

module.exports = Tutor;
