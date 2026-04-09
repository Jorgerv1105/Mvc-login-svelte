import { UserModel } from '$lib/server/models/User';
import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const usuario = data.get('usuario');
        const password = data.get('password');

        const user = await UserModel.getByUsername(usuario);

        if (!user) {
            return { error: 'El usuario no existe.' };
        }

        const match = await UserModel.comparePassword(password, user.password);

        if (!match) {
            return { error: 'Contraseña incorrecta.' };
        }

        // Login exitoso
        cookies.set('session', user.usuario, { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 });
        throw redirect(303, '/crud');
    }
};