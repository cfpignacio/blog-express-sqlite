import { Request, Response } from 'express';
import { dbcontext } from '../db/dbcontext';
import { Usuarios } from '../usuarios/usuarios.entity';
import { Ilogin } from './auth.interfaces';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
	try {
		const usuarioRepository = dbcontext.getRepository(Usuarios);
		// primero busco al usuario
		const dataRequest = req.body;
		const buscarUsuario = await usuarioRepository.findOneBy({
			email: dataRequest.email,
		});

		if (!buscarUsuario) {
			throw new Error('Usuario/contraseña incorrecto');
		}
		// comparo las contreseñas
		const compararPass = await bcrypt.compare(
			dataRequest.pass,
			buscarUsuario.pass
		);

		res.json({
			msg: `El resultado del login fue : ${compararPass}`,
		});
	} catch (error) {
		throw new Error('Usuario/contraseña incorrecto');
	}
};
