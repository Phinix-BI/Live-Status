import mongoose from 'mongoose';


const statusSchema = new mongoose.Schema({
   
    status: {
        type: String,
        required: true,
        enum: ['Online', 'Offline', 'Do not disturb', 'Away', 'Chill mode', 'Busy'],
        default: 'Offline'
    },
    apiKey: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Status = mongoose.model('Status', statusSchema);

export default Status;
