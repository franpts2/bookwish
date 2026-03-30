import { writable } from 'svelte/store';
import type { Book } from './books';

function createBooksStore() {
	// init from localStorage if available
	let initialBooks: Book[] = [];
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem('books');
		initialBooks = stored ? JSON.parse(stored) : [];
	}

	const { subscribe, set, update } = writable<Book[]>(initialBooks);

	return {
		subscribe,
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
