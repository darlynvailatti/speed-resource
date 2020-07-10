import * as mongoose from 'mongoose';

export const athleteSchema = new mongoose.Schema({
    code: String,
    name: String,  
})
module.exports = mongoose.model('athlete', athleteSchema);
