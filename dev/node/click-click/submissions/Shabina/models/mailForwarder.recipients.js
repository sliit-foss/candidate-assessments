import mongoose from 'mongoose';

const recipientSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: String,
    email : String,
    isSent : Boolean,
    isClicked : Boolean,
}, {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const Recipient = mongoose.model('recipient', recipientSchema);
Recipient.syncIndexes();

export default Recipient;