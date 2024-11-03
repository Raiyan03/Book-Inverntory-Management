import { sql } from "@vercel/postgres";

/**
 * Inserts a new book into the inventory.
 * 
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @param {string} genre - The genre of the book.
 * @param {string} publication_date - The publication date of the book (YYYY-MM-DD format).
 * @param {string|number} isbn - The ISBN number of the book.
 * @param {number} stock - The number of copies available in stock.
 * @returns {Promise} - A promise that resolves when the book is added to the inventory.
 */
export const InsertNewBool = async (title, author, genre, publication_date, isbn, stock) => {
    try {
        const res = sql`INSERT INTO INVENTORY (title, author, genre, publication_date, isbn, stock)
                    VALUES (${title}, ${author}, ${genre}, ${publication_date}, ${isbn}, ${stock})`;
        return res;
    } catch (error) {
        console.error("Error adding new book:", error);
    }
}

/**
 * Updates the details of an existing book in the inventory.
 * 
 * @param {number} entry_id - The ID of the book to update.
 * @param {string} title - The new title of the book.
 * @param {string} author - The new author of the book.
 * @param {string} genre - The new genre of the book.
 * @param {string} publication_date - The new publication date of the book (YYYY-MM-DD format).
 * @param {string|number} isbn - The new ISBN number of the book.
 * @param {number} stock - The new number of copies available in stock.
 * @returns {Promise} - A promise that resolves when the book details are updated.
 */
export const UpdateBookDetails = async (entry_id, title, author, genre, publication_date, isbn, stock) => {
    try {
        const res = sql`UPDATE INVENTORY 
                        SET title = ${title}, author = ${author}, genre = ${genre}, 
                            publication_date = ${publication_date}, isbn = ${isbn}, stock = ${stock}
                        WHERE entry_id = ${entry_id}`;
        return res;
    } catch (error) {
        console.error("Error updating book details:", error);
    }
}

/**
 * Deletes a book from the inventory by its ID.
 * 
 * @param {number} entry_id - The ID of the book to delete.
 * @returns {Promise} - A promise that resolves when the book is deleted.
 */
export const DeleteBook = async (entry_id) => {
    try {
        const res = sql`DELETE FROM INVENTORY WHERE entry_id = ${entry_id}`;
        return res;
    } catch (error) {
        console.error("Error deleting book:", error);
    }
}

/**
 * Searches for books in the inventory based on title, author, or genre.
 * 
 * @param {string} genres - The genres to filter the search results.
 * @param {string} authors - The authors to filter the search results.
 * @param {string} searchElement - The search term to match against title, author, or genre.
 * @returns {Promise<Array>} - A promise that resolves to an array of matching books.
 */
export const SearchBooks = async (genres, authors, searchElement) => {
    try {
        // Only trigger search if input length is more than 3 characters
        console.log("Search Element:", searchElement);
        if (searchElement.length > 3) {
            const searchQuery = searchElement + '%'; // Match only starting characters
            const query = sql`
                SELECT * FROM INVENTORY
                WHERE title ILIKE ${searchQuery}
                OR author ILIKE ${searchQuery}
                OR genre ILIKE ${searchQuery}
            `;
            const res = await query;
            return res;
        } else {
            return []; // Return empty array if input length is less than or equal to 3
        }
    } catch (error) {
        console.error("Error searching books:", error);
    }
}

/**
 * Retrieves a distinct list of authors from the inventory.
 * 
 * @returns {Promise<Array>} - A promise that resolves to an array of authors.
 */
export const GetAuthors = async () => {
    try {
        const res = sql`SELECT DISTINCT author FROM INVENTORY`;
        return res;
    } catch (error) {
        console.error("Error fetching authors:", error);
    }
}

/**
 * Retrieves a distinct list of genres from the inventory.
 * 
 * @returns {Promise<Array>} - A promise that resolves to an array of genres.
 */
export const GetGenres = async () => {
    try {
        const res = sql`SELECT DISTINCT genre FROM INVENTORY`;
        return res;
    } catch (error) {
        console.error("Error fetching genres:", error);
    }
}