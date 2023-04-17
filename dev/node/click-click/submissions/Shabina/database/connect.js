import mongoose from "mongoose";
import 'dotenv/config';

const connectionString = process.env.MONGO_URL;

const connectDB = async () => {
    mongoose.connect(connectionString).then(() => {
        console.log('connected to the database');
    }).catch((error) => {
        console.log(`not connected to the database\n${error}`);
    })
}

export default connectDB;