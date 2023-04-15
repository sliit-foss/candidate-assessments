import express from 'express';
import cors from 'cors';
import router from './routes/mailForwarder.routes.js';
import 'dotenv/config';
import connectDB from './database/connect.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api/v1/recipients', router);

connectDB();

app.listen(port, () => {
	console.log(`server is listening on port ${port}...`);
});