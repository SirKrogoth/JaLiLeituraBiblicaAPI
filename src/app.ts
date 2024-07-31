import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import livroRouter from './routers/livroRouter';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(livroRouter);


export default app;