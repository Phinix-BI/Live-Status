import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import statusRoute from './src/routers/statusRoute.js';
import connectDB from './src/db/index.js';
import 'dotenv/config';
import authenticate from './src/middleware/auth.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(authenticate);

connectDB();

app.use('/api/v1',statusRoute);

app.get('/admin/get/status',statusRoute);
app.patch('/admin/update/status',statusRoute);
  


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on ${process.env.PORT || 3000}`);
});