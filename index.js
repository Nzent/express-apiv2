import express from 'express';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.post('/', (req, res) => {
    res.send(req.body);
    console.log(req.body)
});

app.listen(PORT, () => console.log(`Server started on port ${process.env.PORT}`));