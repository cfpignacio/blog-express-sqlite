import jwt from 'jsonwebtoken';
import logger from '../logger/logger';
import { IUsuario } from '../usuarios/usuario.interface';

const secret = process.env.SECRET_JWT || 'DefaultPassword';

export const generarTokenJWT = (payload: IUsuario): string => {
	const token = jwt.sign(payload, secret, { expiresIn: '2h' });
	return token;
};

// export const verificarToken = (token:string): token => {

// }
