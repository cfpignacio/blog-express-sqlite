import { Request, Response } from 'express';

export const crearComentario = async (req: Request, res: Response) => {
	try {
		res.json({ msg: 'comentario creado' });
	} catch (error) {
		res.status(500).json({ msg: 'No se pudo crear el comentario' });
	}
};

export const borrarComentario = async (req: Request, res: Response) => {
	try {
		res.json({ msg: 'comentario borrado' });
	} catch (error) {
		res.status(500).json({ msg: 'No se pudo borrar el comentario' });
	}
};
