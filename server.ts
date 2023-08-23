import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: Express = express();

app.use(bodyParser.json());

app.use('/', (req: Request, res: Response) => {
	res.json({
		mgs: 'Servidor funcionando OK 🚀🚀',
	});
});

app.listen(3000, () => {
	console.log('Servidor funcionando OK🚀🚀');
});
