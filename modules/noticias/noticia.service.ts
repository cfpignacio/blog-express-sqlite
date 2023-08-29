import { Request, Response } from 'express';
import { iNoticia } from './noticia.interface';
import { Noticia } from './noticia.entity';
import { dbcontext } from '../db/dbcontext';

export const crearNoticia = async (req: Request, res: Response) => {
	try {
		const noticiaRepository = await dbcontext.getRepository(Noticia);
		const nuevaNoticia: iNoticia = req.body;

		// creamos la noticia sin guardar
		const noticia = await noticiaRepository.create(nuevaNoticia);

		// guardamos la noticia
		const result = await noticiaRepository.save(noticia);

		res.json({
			msg: `Se creo la noticia correctamente con el id: ${result.id}`,
		});
	} catch (error) {
		res.status(500).json({ msg: 'No se pudo guardar la noticia' });
	}
};

export const listarNoticia = async (req: Request, res: Response) => {
	try {
		const noticiaRepository = await dbcontext.getRepository(Noticia);
		const noticias = await noticiaRepository.find();

		res.json({ data: noticias, cantidad: noticias.length });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'No se pudo obtener un listado de noticias' });
	}
};

// // obtener noticia por id
// export const obtenerNoticiaId = (req: Request, res: Response) => {
// 	try {
// 		const noticia = noticiaDB.find((n) => n.id === req.params.id);
// 		if (!noticia) {
// 			throw new Error();
// 		}
// 		res.json(noticia);
// 	} catch (error) {
// 		res.status(404).json({ msg: 'No se pudo encontrar la noticia' });
// 	}
// };

// // eliminar noticia
// export const borrarNoticia = (req: Request, res: Response) => {
// 	const idDelete = req.params.id;

// 	const indexToDelete = noticiaDB.findIndex(
// 		(noticia) => noticia.id === idDelete
// 	);

// 	if (indexToDelete === -1) {
// 		res.status(404).json({ msg: 'Noticia no encontrada' });
// 	} else {
// 		noticiaDB.splice(indexToDelete, 1);
// 		res.status(200).json({ msg: 'Noticia eliminada' });
// 	}
// };
