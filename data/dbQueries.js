import { sql } from "@vercel/postgres";

/**
 * Inserts a new book into the inventory.
 * 
 * This function executes the SQL query:
 * `INSERT INTO INVENTORY (title, author, genre, publication_date, isbn, stock)`
 * to add a new book with the specified details.
 * 
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @param {string} genre - The genre of the book.
 * @param {string} publication_date - The publication date of the book (YYYY-MM-DD format).
 * @param {string|number} isbn - The ISBN number of the book.
 * @param {number} stock - The number of copies available in stock.
 * @returns {Promise} - A promise that resolves when the book is added to the inventory.
 *
 * @example
 * // Example usage
 * await `InsertNewBook`(title, author, genre, publication_date, isbn, stock);
 */
export const InsertNewBook = async (title, author, genre, publication_date, isbn, stock) => {
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
 * This function executes the SQL query:
 * `UPDATE INVENTORY SET title = ?, author = ?, genre = ?, publication_date = ?, isbn = ?, stock = ? WHERE entry_id = ?`
 * to modify the book details identified by the provided entry ID.
 * 
 * @param {number} entry_id - The ID of the book to update.
 * @param {string} title - The new title of the book.
 * @param {string} author - The new author of the book.
 * @param {string} genre - The new genre of the book.
 * @param {string} publication_date - The new publication date of the book (YYYY-MM-DD format).
 * @param {string|number} isbn - The new ISBN number of the book.
 * @param {number} stock - The new number of copies available in stock.
 * @returns {Promise} - A promise that resolves when the book details are updated.
 *
 * @example
 * // Example usage
 * await `UpdateBookDetails`(entry_id, title, author, genre, publication_date, isbn, stock);
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
 * This function executes the SQL query:
 * `DELETE FROM INVENTORY WHERE entry_id = ?`
 * to remove the book identified by the provided entry ID from the inventory.
 * 
 * @param {number} entry_id - The ID of the book to delete.
 * @returns {Promise} - A promise that resolves when the book is deleted.
 *
 * @example
 * // Example usage
 * await `DeleteBook`(entry_id);
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
 * This function executes the SQL query:
 * `SELECT * FROM INVENTORY WHERE title ILIKE ? OR author ILIKE ? OR genre ILIKE ?`
 * to find books that match the given search criteria.
 * 
 * @param {string} genres - The genres to filter the search results.
 * @param {string} authors - The authors to filter the search results.
 * @param {string} searchElement - The search term to match against title, author, or genre.
 * @returns {Promise<Array>} - A promise that resolves to an array of matching books.
 *
 * @example
 * // Example usage
 * const results = await `SearchBooks`(genres, authors, searchElement);
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
 * This function executes the SQL query:
 * `SELECT DISTINCT author FROM INVENTORY`
 * to get a list of unique authors available in the inventory.
 * 
 * @returns {Promise<Array>} - A promise that resolves to an array of authors.
 *
 * @example
 * // Example usage
 * const authors = await `GetAuthors`();
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
 * This function executes the SQL query:
 * `SELECT DISTINCT genre FROM INVENTORY`
 * to get a list of unique genres available in the inventory.
 * 
 * @returns {Promise<Array>} - A promise that resolves to an array of genres.
 *
 * @example
 * // Example usage
 * const genres = await `GetGenres`();
 */
export const GetGenres = async () => {
    try {
        const res = sql`SELECT DISTINCT genre FROM INVENTORY`;
        return res;
    } catch (error) {
        console.error("Error fetching genres:", error);
    }
}

/**
 * Retrieves all books from the inventory.
 * 
 * This function executes the SQL query:
 * `SELECT * FROM INVENTORY`
 * to fetch all records from the inventory table.
 * 
 * @returns {Promise<Array>} - A promise that resolves to an array of all books in the inventory.
 *
 * @example
 * // Example usage
 * const books = await `getAllBooks`();
 */
export const getAllBooks = async () => {
    const res = sql`SELECT * FROM INVENTORY`
    return res
}