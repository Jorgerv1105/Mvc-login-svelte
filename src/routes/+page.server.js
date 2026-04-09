import { redirect } from '@sveltejs/kit';

export function load() {
    // Redirige automáticamente a la página del CRUD
    throw redirect(303, '/crud');
}