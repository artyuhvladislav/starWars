import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './router.js';


const PORT = 5000;
const DB_URL = `mongodb+srv://admin:1111@cluster0.dilabit.mongodb.net/posts?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router);




const startApp = async () => {
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
  } catch (e) {
    console.log(e);
  }
};
startApp();
