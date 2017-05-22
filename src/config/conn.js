/** flow */
import mongoose from 'mongoose';

// Connection to DB
export const Conn = mongoose.connect('mongodb://localhost:27017/cavaonline', (err, res) => {
 if(err) throw err;
 console.log('Connected to Database');
});
