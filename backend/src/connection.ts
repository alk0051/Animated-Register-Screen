import Mongoose from 'mongoose';


const mongoose = Mongoose;

const url = 'mongodb+srv://ALK:alkalk51@cluster0.jqdv5.mongodb.net/animated-register-screen?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, () => 
      console.log('Connected to DB!')
    );

  } catch (err) {
      console.error(err);
  }
}

export default connectDB;
