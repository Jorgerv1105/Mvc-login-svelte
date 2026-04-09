import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
    const session = event.cookies.get('session');

    // Si intenta entrar al CRUD sin sesión, al login
    if (event.url.pathname.startsWith('/crud') && !session) {
        throw redirect(303, '/login');
    }

    // Si ya tiene sesión e intenta ir al login o registro, al CRUD
    if ((event.url.pathname === '/login' || event.url.pathname === '/registro') && session) {
        throw redirect(303, '/crud');
    }

    return await resolve(event);
}