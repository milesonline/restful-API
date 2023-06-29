//to run project use npm run dev
//postman collections to test backend and server

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const Student = require('./models/studentModel');
const Tutor = require('./models/tutorModel');
const Tutorial = require('./models/tutorialModel');
const PORT = 3000;

//Middleware
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


// Database
const uri = `mongodb+srv://sam:cs230@exam.2mnotng.mongodb.net/test?retryWrites=true&w=majority`;

const dir =
    //Routes
    app.get('/', (req, res) => {
        res.status(200).sendFile(__dirname + "/index.html");
    })

app.get('/blog', (req, res) => {
    res.status(200).send('Hello Blog')
})

//Create Student
app.post('/student', async(req, res) => {
    // console.log(req.body);
    // res.status(200).send(req.body);
    try {
        const student = await Student.create(req.body)
        res.status(200).json(student);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

//Create Tutor
app.post('/tutor', async(req, res) => {
    // console.log(req.body);
    // res.status(200).send(req.body);
    try {
        const tutor = await Tutor.create(req.body)
        res.status(200).json(tutor);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

//Create Tutorial
app.post('/tutorial', async(req, res) => {
    // console.log(req.body);
    // res.status(200).send(req.body);
    try {
        const tutorial = await Tutorial.create(req.body)
        res.status(200).json(tutorial);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

//Send student data
app.post('/studentData', (req, res) => {
    const myData = new Student(req.body);
    myData.save()
        .then(item => {
            res.send("Item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save database");
        });
    //res.send(`Full name is:${req.body.fname} ${req.body.lname}.`, HTMLCode);
});

//Send tutor data
app.post('/tutorData', (req, res) => {
    const myData = new Tutor(req.body);
    myData.save()
        .then(item => {
            res.send("Item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save database");
        });
    //res.send(`Full name is:${req.body.fname} ${req.body.lname}.`, HTMLCode);
});

//Send tutorial data
app.post('/tutorialData', (req, res) => {
    const myData = new Tutorial(req.body);
    myData.save()
        .then(item => {
            res.send("Item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save database");
        });
    //res.send(`Full name is:${req.body.fname} ${req.body.lname}.`, HTMLCode);
});


//Get Request - get all students

app.get('/student', async(req, res) => {
    try {
        const student = await Student.find({});
        res.status(200).json(student);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

//Get Request - get all tutors 
app.get('/tutor', async(req, res) => {
    try {
        const tutor = await Tutor.find({});
        res.status(200).json(tutor);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

//Get Request - get all tutorials 
app.get('/tutorial', async(req, res) => {
    try {
        const tutorial = await Tutorial.find({});
        res.status(200).json(tutorial);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})


//Get Request - Get student by id

app.get('/student/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        res.status(200).json(student);
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message);
    }
})

//Get Request - Get tutor by id
app.get('/tutor/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const tutor = await Tutor.findById(id);
        res.status(200).json(tutor);
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message);
    }
})

//Get Request - Get tutorial by id

app.get('/tutorial/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const tutorial = await Tutorial.findById(id);
        res.status(200).json(tutorial);
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message);
    }
})

//Put Request - Update student

app.put('/student/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body);
        if (!student) {
            return res.status(400).json({ message: `Cannot find any student with the ID ${id}` })
        }
        const updatedStudent = await Student.findById(id);
        res.status(200).json(updatedStudent);
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message);
    }
})

//Put Request - Update tutor
app.put('/tutor/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const tutor = await Tutor.findByIdAndUpdate(id, req.body);
        if (!tutor) {
            return res.status(400).json({ message: `Cannot find any tutor with the ID ${id}` })
        }
        const updatedTutor = await Tutor.findById(id);
        res.status(200).json(updatedTutor);
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message);
    }
})

//Put Request - Update tutorial
app.put('/tutorial/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const tutorial = await Tutorial.findByIdAndUpdate(id, req.body);
        if (!tutorial) {
            return res.status(400).json({ message: `Cannot find any tutorial with the ID ${id}` })
        }
        const updatedTutorial = await Tutorial.findById(id);
        res.status(200).json(updatedTutorial);
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message);
    }
})

//Delete Request - remove student with id

app.delete('/student/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);
        if (!student) {
            return res.status(404).json({ message: `Cannot find student with the ID ${id}` })
        }
        //const checkDeleted = await Student.findById(id);
        res.status(200).json(student);
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message);
    }
})

app.delete('/student/:id', (req, res) => {
    const studentId = req.params.id;
  
    Student.findByIdAndDelete(studentId)
      .then(() => {
        res.json({ message: 'Student deleted successfully' });
      })
      .catch(error => {
        res.status(500).json({ error: 'Failed to delete student' });
      });
  });
  


//Delete Request - remove tutor with id
app.delete('/tutor/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const tutor = await Tutor.findByIdAndDelete(id);
        if (!tutor) {
            return res.status(404).json({ message: `Cannot find tutor with the ID ${id}` })
        }
        //const checkDeleted = await Tutor.findById(id);
        res.status(200).json(tutor);
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message);
    }
})

//Delete Request - remove tutorial with id
app.delete('/tutorial/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const tutorial = await Tutorial.findByIdAndDelete(id);
        if (!tutorial) {
            return res.status(404).json({ message: `Cannot find tutorial with the ID ${id}` })
        }
        //const checkDeleted = await Tutorial.findById(id);
        res.status(200).json(tutorial);
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message);
    }
})

mongoose.
connect(uri).
then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
        console.log(`We listening out here on http://localhost:${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})
