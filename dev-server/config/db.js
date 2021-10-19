import mongoose from 'mongoose';

export function connectToDB() {
    mongoose.connect(process.env.DB_URL, 
        error => {
            if (error) {
                console.log('Uneable to connect to database');
                throw error;
            } else {
                console.log('Conected to Mongo DB');
            }
    });
}