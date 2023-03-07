import express from 'express';
import { getExampleController } from '../controllers/example.js';

const router = express.Router();


router.get('/', getExampleController)

router.post('/', (req,res) => {
  res.send('Saving a diary!')
})

export default router;