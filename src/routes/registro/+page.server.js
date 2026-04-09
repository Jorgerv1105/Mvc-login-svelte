import { UserModel } from '$lib/server/models/User';
import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const usuario = data.get('usuario');
        const password = data.get('password');

        try {
            const existe = await UserModel.getByUsername(usuario);
            if (existe) return { error: 'El usuario ya existe.' };

            await UserModel.register(usuario, password);
            cookies.set('session', usuario, { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 });
        } catch (error) {
            console.error(error);
            return { error: 'Error al registrar el usuario.' };
        }
        throw redirect(303, '/crud');
    }
};