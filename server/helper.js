import { InsertNewBook, UpdateBookDetails, DeleteBook, GetAuthors, GetGenres, SearchBooks, getAllBooks } from "@/data/dbQueries";
import { NextResponse } from "next/server";

/**
 * Handles the addition of a new book to the inventory.
 * 
 * This function calls the `InsertNewBook` database query to insert a new book into the database.
 *
 * @param {Request} req - The request object containing book details in JSON format.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response indicating success or failure.
 *
 * @example
 * // Example request to add a new book
 * const response = await `addNewBook`(req);
 * console.log(response); // { success: 'New book added successfully' }
 */

export const addNewBook = async (req) => {
    try {
        const { title, author, genre, publish_date, isbn, stock } = await req.json();
        
        const res = await InsertNewBook(title, author, genre, publish_date, isbn, stock);
        return NextResponse.json({ success: 'New book added successfully' });
    } catch (error) {
        console.error("Error adding new book:", error);
        return NextResponse.json({ error: 'Something went wrong', details: error.message }, { status: 500 });
    }
}

/**
 * Handles updating the details of an existing book.
 * 
 * This function calls the `UpdateBookDetails` database query to update the specified book's details in the database.
 *
 * @param {Request} req - The request object containing updated book details in JSON format.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response indicating success or failure.
 *
 * @example
 * // Example request to edit a book
 * const response = await `editBook`(req);
 * console.log(response); // { success: 'Book details updated successfully' }
 */

export const editBook = async (req) => {
    try {
        const { entry_id, title, author, genre, publish_date, isbn, stock } = await req.json();
        
        const res = await UpdateBookDetails(entry_id, title, author, genre, publish_date, isbn, stock);
        return NextResponse.json({ success: 'Book details updated successfully' });
    } catch (error) {
        console.error("Error updating book details:", error);
        return NextResponse.json({ error: 'Something went wrong', details: error.message }, { status: 500 });
    }
}

/**
 * Handles the deletion of a book from the inventory.
 * 
 * This function calls the `DeleteBook` database query to remove a book from the database using its entry ID.
 *
 * @param {Request} req - The request object containing the entry ID of the book to be deleted in JSON format.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response indicating success or failure.
 *
 * @example
 * // Example request to delete a book
 * const response = await `deleteBook`(req);
 * console.log(response); // { success: 'Book deleted successfully' }
 */

export const deleteBook = async (req) => { 
    try {
        const { entry_id } = await req.json();

        const res = await DeleteBook(entry_id);
        return NextResponse.json({ success: 'Book deleted successfully' });
    } catch (error) {
        console.error("Error deleting book:", error);
        return NextResponse.json({ error: 'Something went wrong', details: error.message }, { status: 500 });
    }
}

/**
 * Handles the retrieval of filtered books based on search criteria.
 * 
 * This function calls the `SearchBooks` database query to find books that match the provided search parameters.
 *
 * @param {Request} req - The request object containing search parameters in JSON format.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response containing the filtered books.
 *
 * @example
 * // Example request to get filtered books
 * const response = await `getFilteredBooks`(req);
 * console.log(response); // { success: 'Books found successfully', data: [...] }
 */

export const getFilteredBooks = async (req) => {
    try {
        const { searchElement, genre, author } = await req.json();
        console.log("Search Element:", searchElement);
        const res  = await SearchBooks(genre, author, searchElement);
        console.log("Books found successfully:", res?.rows || []);
        return NextResponse.json({ success: 'Books found successfully', data: res.rows || [] });
    } catch (error) {
        console.error("Error searching books:", error);
        return NextResponse.json({ error: 'Something went wrong', details: error.message }, { status: 500 });
    }
}

/**
 * Handles the retrieval of authors from the inventory.
 * 
 * This function calls the `GetAuthors` database query to retrieve the list of authors available in the database.
 *
 * @param {Request} req - The request object for fetching authors.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response containing the list of authors.
 *
 * @example
 * // Example request to get authors
 * const response = await `getAuthors`(req);
 * console.log(response); // { success: 'Authors fetched successfully', data: [...] }
 */

export const getAuthors = async (req) => {
    try {
        const { rows } = await GetAuthors();
        return NextResponse.json({ success: 'Authors fetched successfully', data: rows });
    } catch (error) {
        console.error("Error fetching authors:", error);
        return NextResponse.json({ error: 'Something went wrong', details: error.message }, { status: 500 });
    }
}

/**
 * Handles the retrieval of genres from the inventory.
 * 
 * This function calls the `GetGenres` database query to retrieve the list of book genres available in the database.
 *
 * @param {Request} req - The request object for fetching book genres.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response containing the list of genres.
 *
 * @example
 * // Example request to get book genres
 * const response = await `getBooksGenre`(req);
 * console.log(response); // { success: 'Books genre fetched successfully', data: [...] }
 */

export const getBooksGenre = async (req) => {
    try {
        const { rows } = await GetGenres();
        return NextResponse.json({ success: 'Books genre fetched successfully', data: rows });
    } catch (error) {
        console.error("Error fetching books genre:", error);
        return NextResponse.json({ error: 'Something went wrong', details: error.message }, { status: 500 });
    }
}

/**
 * Handles POST requests to retrieve all books.
 * 
 * This function calls the `getAllBooks` database query to fetch all books available in the database.
 *
 * @param {Request} req - The request object for fetching all books.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response containing the list of all books.
 *
 * @example
 * // Example request to get all books
 * const response = await `getAllBooks`(req);
 * console.log(response); // { success: 'All books retrieved successfully', data: [...] }
 */

export async function getBooks() {
    const { rows } = await getAllBooks();
    return NextResponse.json(rows);
}