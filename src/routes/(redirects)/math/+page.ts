import { redirect } from '@sveltejs/kit';

export function load() {
    throw redirect(307, './products/pt-t64');
}