import express from 'express';
import { createRecipient, getAllSentRecipients, sentUpdateReciepient, getAllRecipients, getRecipient, updateReciepient, clickUpdateReciepient } from '../controller/mailForwarder.js';
const router = express.Router();

router.route('/').get(getAllRecipients);
router.route('/:id').get(getRecipient);
router.route('/sent/all').get(getAllSentRecipients);
router.route('/click/:id').put(clickUpdateReciepient);
router.route('/sent/:id').put(sentUpdateReciepient);
router.route('/:id').put(updateReciepient);
router.route('/add').post(createRecipient);

export default router;