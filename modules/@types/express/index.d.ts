import { IUsuario } from '../../usuarios/usuario.interface';

declare global {
	namespace Express {
		export interface Request {
			usuario: IUsuario;
		}
	}
}
