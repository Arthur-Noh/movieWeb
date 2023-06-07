import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 5000;

const userName = 'arthurNoh';
const password = 'Dev79*42*27';

mongoose.connect(`mongodb+srv://${userName}:${password}@cluster0.sdvmndh.mongodb.net/?retryWrites=true&w=majority`
).then(() => {
    console.log('MongoDB Connected...');
}).catch((error) => {
    console.log(error);
});

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`Example app listening on port ${port}`));