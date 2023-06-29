const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
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
    },

    dob: {
        type: String,
        required: [true, "Please enter your Date of Birth"]
    },

    parent_guardian: {
        type: String,
        required: [false, "Please enter your parent/guardians name"]
    },

    attendance: {
        type: String,
        required: [true, "Yes/No"]
    },

    gender: {
        type: String,
        required: [true, "Please enter your gender"]
    },

    subject: {
        type: String,
        required: [true, "Please enter your subject"]
    }

   
}, {
    timestamps: true,
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
