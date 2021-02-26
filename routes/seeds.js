import express from 'express';
import { stringify, v4 as uuidv4 } from 'uuid';

const router = express.Router();

router.get('/', (req,res)=> {
    const seed = uuidv4();
    var now = new Date();
    
    now.setSeconds(now.getSeconds()+15);

    now.setSeconds
    console.log(seed);
    res.send({
        seed: seed,
        expires_at: now.toISOString()
    });
});

export default router;