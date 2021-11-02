const express = require('express');
const app = express();
const cros = require('cors');
const pool = require('./db');

app.use(cros());
app.use(express.json());

const fileUpload = require('express-fileupload');

app.use(fileUpload());

// Upload Endpoint
// app.post('/upload', (req, res) => {
//     if (req.files === null) {
//       return res.status(400).json({ msg: 'No file uploaded' });
//     }
  
//     const file = req.files.file;
  
//     file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
//       if (err) {
//         console.error(err);
//         return res.status(500).send(err);
//       }
  
//       res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
//     });
//   });
  





// create todo
app.post('/addbook',async (req, res) =>{
    try {
        console.log(req.body);
        const { title,image,description } = req.body;
        const newBook = await pool.query("INSERT INTO book(title,image,description) VALUES($1,$2,$3) RETURNING *",[title,image,description]);

        console.log(image);

        res.json(newBook);

    } catch (err) {
        console.log(err.message);
    }
});


// get all books

app.get('/allbooks', async (req,res) =>{

    try {
        
        const allbooks = await pool.query("SELECT * FROM book");

        res.json(allbooks.rows);

    } catch (err) {
        console.error(err);
    }

});


// get a book by id
app.get('/book/:id', async (req,res) =>{

    const { id } = req.params;

    try {
        
        const bookById = await pool.query("SELECT * FROM book WHERE book_id = $1", [id]);

        res.json(bookById.rows[0]);

    } catch (err) {
        console.error(err);
    }

});

// update a book

app.put('/bookupdate/:id', async (req,res) =>{

    try {
        
        const { id } = req.params;
        const { title, description } = req.body;
        
        const bookUpdate = await pool.query("UPDATE book SET title=$1, description=$2 WHERE book_id =$3", [title,description, id]);

        res.json("book is updated");

    } catch (err) {
        console.error(err);
    }

});


// delete a book
app.delete('/book/:id', async (req,res) =>{

    const { id } = req.params;

    try {
        
        const deletebook = await pool.query("DELETE FROM book WHERE book_id = $1", [id]);

        res.json("Book is deleted");

    } catch (err) {
        console.error(err);
    }

});





app.listen(5000, () => {
    console.log('Server has start al 5000')
});

app.use('/', (req, res) =>{
    res.send('all bookss');
});