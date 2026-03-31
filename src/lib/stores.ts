import { writable } from 'svelte/store';
import type { Book } from './books';

function createBooksStore() {
	// always start with empty - hydration happens via hydrateBooks()
	const { subscribe, set, update } = writable<Book[]>([]);

	return {
		subscribe,
		set,
		addBook: (book: Book) => {
			update((books) => {
				const newBooks = [...books, book];
				if (typeof window !== 'undefined') {
					localStorage.setItem('books', JSON.stringify(newBooks));
				}
				return newBooks;
			});
		},
		removeBook: (index: number) => {
			update((books) => {
				const newBooks = books.filter((_, i) => i !== index);
				if (typeof window !== 'undefined') {
					localStorage.setItem('books', JSON.stringify(newBooks));
				}
				return newBooks;
			});
		},
	};
}

export const books = createBooksStore();

export function hydrateBooks() {
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem('books');
		const initialBooks = stored ? JSON.parse(stored) : [];
		books.set(initialBooks);
	}
}
