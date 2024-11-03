import { InsertNewBool, UpdateBookDetails, DeleteBook, GetAuthors, GetGenres, SearchBooks } from "@/data/dbQueries";
import { NextResponse } from "next/server";

/**
 * Handles the addition of a new book to the inventory.
 * 
 * @param {Request} req - The request object containing book details in JSON format.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response indicating success or failure.
 */
export const addNewBook = async (req) => {
    try {
        const { title, author, genre, publish_date, isbn, stock } = await req.json();
        
        const res = await InsertNewBool(title, author, genre, publish_date, isbn, stock);
        return NextResponse.json({ success: 'New book added successfully' });
    } catch (error) {
        console.error("Error adding new book:", error);
        return NextResponse.json({ error: 'Something went wrong', details: error.message }, { status: 500 });
    }
}

/**
 * Handles updating the details of an existing book.
 * 
 * @param {Request} req - The request object containing updated book details in JSON format.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response indicating success or failure.
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
 * @param {Request} req - The request object containing the entry ID of the book to be deleted in JSON format.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response indicating success or failure.
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
 * @param {Request} req - The request object containing search parameters in JSON format.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response containing the filtered books.
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
 * @param {Request} req - The request object for fetching authors.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response containing the list of authors.
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
 * @param {Request} req - The request object for fetching book genres.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response containing the list of genres.
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