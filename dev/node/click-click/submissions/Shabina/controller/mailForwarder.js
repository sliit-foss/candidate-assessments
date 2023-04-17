import Recipient from '../models/mailForwarder.recipients.js';

export const getAllSentRecipients = async (req, res) => {
    try {
        const recipients = await Recipient.find({isSent : true}); 
        res.status(200).json({recipients});
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

export const getRecipient = async (req, res) => {
    try{
        const {id: recipientID} = req.params;
        const recipient = await Recipient.findById(recipientID);
        if(!recipient){
            return res.status(404).json({msg: `no recipient with id: ${recipientID}`});
        }
        res.status(200).json({recipient});
    }catch(error){
        res.status(500).json({msg: error});
    }
};

export const getAllRecipients = async (req, res) => {
    try {
        const recipients = await Recipient.find({}); 
        res.status(200).json({recipients});
    } catch (error) {
        res.status(500).json({msg: error});
    }
};


export const updateReciepient = async (req, res) => {
    try {
        const {id: recipientID} = req.params;
        const recipient = await Recipient.findByIdAndUpdate(recipientID, req.body , {
            new: true,
            runValidation: true
        });
        if(!recipient){
            return res.status(404).json({msg: `No recipient with id: ${recipientID}`});
        }
        res.status(200).json({recipient});
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

export const sentUpdateReciepient = async (req, res) => {
    try {
        const {id: recipientID} = req.params;
        const recipient = await Recipient.findByIdAndUpdate(recipientID, {isSent : true} , {
            new: true,
            runValidation: true
        });
        if(!recipient){
            return res.status(404).json({msg: `No recipient with id: ${recipientID}`});
        }
        res.status(200).json({recipient});
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

export const clickUpdateReciepient = async (req, res) => {
    try {
        const {id: recipientID} = req.params;
        const recipient = await Recipient.findByIdAndUpdate(recipientID, {isClicked : true }, {
            new: true,
            runValidation: true
        });
        if(!recipient){
            return res.status(404).json({msg: `No recipient with id: ${recipientID}`});
        }
        res.status(200).json({recipient});
    } catch (error) {
        res.status(500).json({msg: error});
    }
};

export const createRecipient = async (req, res) => {
    try {
        const recipient = await Recipient.create(req.body);
        res.status(201).json({recipient});
    } catch (error) {
        res.status(500).json({msg: error});
    }
};