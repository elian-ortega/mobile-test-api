import express from 'express';
import bodyParser from 'body-parser';

import seedsRoutes from './routes/seeds.js';

const app = express();
let PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/seed', seedsRoutes);

app.get('/', (req,res)=>{
    res.send('Hello from home');
});

app.listen(PORT, ()=>{
    console.log(`Server running on port: http://localhost:${PORT}`);
});