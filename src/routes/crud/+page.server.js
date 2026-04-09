import { ProductModel } from '$lib/server/models/Product';
import { redirect } from '@sveltejs/kit';

export async function load() {
    return { productos: await ProductModel.getAll() };
}

export const actions = {
    crear: async ({ request }) => {
        const data = Object.fromEntries(await request.formData());
        await ProductModel.create(data);
    },
    actualizar: async ({ request }) => {
        const data = Object.fromEntries(await request.formData());
        const { id, ...campos } = data;
        await ProductModel.update(id, campos);
    },
    eliminar: async ({ request }) => {
        const data = await request.formData();
        await ProductModel.delete(data.get('id'));
    },
    cerrar_sesion: async ({ cookies }) => {
        cookies.delete('session', { path: '/' });
        throw redirect(303, '/login');
    }
};