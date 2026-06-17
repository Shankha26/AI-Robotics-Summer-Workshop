import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Disable command buffering so operations fail fast if DB is disconnected
    mongoose.set('bufferCommands', false);

    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ai-robotics-workshop', {
      serverSelectionTimeoutMS: 3000, // Timeout after 3 seconds
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    console.warn("Continuing server execution. DB operations will fail until MongoDB is started.");
  }
};

export default connectDB;
