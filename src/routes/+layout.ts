import { hydrateBooks } from "$lib/stores";

export async function load() {
	hydrateBooks();
	return {};
}
