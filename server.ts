import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import noticiasRoutes from './modules/notcias/notica.routes';

const app: Express = express();

app.use(bodyParser.json());

app.use('/', (req: Request, res: Response) => {
	res.json({
		mgs: 'Servidor funcionando OK 🚀🚀',
	});
});
app.use('/noticia', noticiasRoutes);
app.listen(3000, () => {
	console.log('Servidor funcionando OK🚀🚀');
});
