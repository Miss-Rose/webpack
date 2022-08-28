import express, {Request, Response} from 'express';
import path from 'path';
import cors from 'cors';
import DB from './src/db.json';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.static( path.resolve(__dirname, '../client/build')));


app.get('/', (request: Request, response: Response) => {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.get('/todos', (request: Request, response: Response) => {
    response.json(DB);
});


app.listen(port, () => console.log(`Running on port ${port}`));