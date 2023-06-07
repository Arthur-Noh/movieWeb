import express from 'express';
import mongoose from 'mongoose';
import User from './models/user.js';

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userName = 'arthurNoh';
const password = 'Dev79*42*27';

mongoose.connect(`mongodb+srv://${userName}:${password}@cluster0.sdvmndh.mongodb.net/?retryWrites=true&w=majority`
).then(() => {
    console.log('MongoDB Connected...');
}).catch((error) => {
    console.log(error);
});

app.get('/', (req, res) => res.send('Hello World'));

// 회원가입
app.post('/register', async (req, res) =>  {
    const user = new User(req.body);

    try {
        const result = await user.save();
        return res.status(200).json({ success: true });
    } catch(error) {
        return res.json({ success: false, error });
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}`));