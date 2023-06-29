const mongoose = require('mongoose');

const tutorialSchema = mongoose.Schema({
    date: {
        type: String,
        required: [true, "Please enter tutorial date"]
    },
    time: {
        type: String,
        required: [true, "Please enter your tutorial time"]
    },
    students_involved: {
        type: String,
        required: [true, "Please enter involved students"]
    },
    tutor_involved: {
        type: String,
        required: [true, "Please enter involved tutor"]
    },

    fee: {
        type: String,
        required: [true, "Please enter fee"]
    },

    tutorial_num: {
        type: String,
        required: [true, "Please enter tutorial number"]
    },

    tutorial_attendance: {
        type: String,
        required: [true, "Please enter attendance"]
    },

    tutorial_subject: {
        type: String,
        required: [true, "Please enter tutorial subject"]
    },


}, {
    timestamps: true,
})

const Tutorial = mongoose.model('Tutorial', tutorialSchema);

module.exports = Tutorial;
