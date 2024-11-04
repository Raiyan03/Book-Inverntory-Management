import axios from "axios";

/**
 * Sends a request to add a new book to the inventory.
 * 
 * This function calls the API endpoint `POST /api/add-book/` to add a new book.
 *
 * @param {Object} book - The book object containing details to be added.
 * @returns {Promise<Object>} - The response from the API call.
 *
 * @example
 * // Example usage
 * const response = await `addNewBookCall`(book);
 * console.log(response); // { success: 'New book added successfully' }
 */
export const addNewBookCall = async (book) => {
    console.log(book);
    try {
        const res = await axios.post('/api/add-book/', book);
        return res;
    } catch (error) {
        return error;
    }
};

/**
 * Sends a request to edit an existing book's details in the inventory.
 * 
 * This function calls the API endpoint `POST /api/edit-book/` to update book details.
 *
 * @param {Object} book - The book object containing updated details.
 * @returns {Promise<Object>} - The response from the API call.
 *
 * @example
 * // Example usage
 * const response = await `editBookCall`(book);
 * console.log(response); // { success: 'Book details updated successfully' }
 */
export const editBookCall = async (book) => {
    try {
        const res = await axios.post('/api/edit-book/', book);
        return res;
    } catch (error) {
        return error;
    }
};

/**
 * Sends a request to delete a book from the inventory.
 * 
 * This function calls the API endpoint `POST /api/delete-book/` to remove a book using its entry ID.
 *
 * @param {number} entry_id - The ID of the book entry to be deleted.
 * @returns {Promise<Object>} - The response from the API call.
 *
 * @example
 * // Example usage
 * const response = await `deleteBookCall`(entry_id);
 * console.log(response); // { success: 'Book deleted successfully' }
 */
export const deleteBookCall = async (entry_id) => {
    try {
        const res = await axios.post('/api/delete-book/', { entry_id });
        return res;
    } catch (error) {
        return error;
    }
};

/**
 * Sends a request to retrieve all books from the inventory.
 * 
 * This function calls the API endpoint `GET /api/get-books/` to fetch all books.
 *
 * @returns {Promise<Object>} - The response from the API call containing all books.
 *
 * @example
 * // Example usage
 * const response = await `getBooksCall`();
 * console.log(response); // { success: 'Books retrieved successfully', data: [...] }
 */
export const getBooksCall = async () => {
    const value = "value"; // This is a dummy value
    try {
        const res = await axios.get('/api/get-books/');
        return res;
    } catch (error) {
        return error;
    }
}

/**
 * Sends a request to retrieve a list of books filtered by specified criteria.
 * 
 * This function calls the API endpoint `POST /api/get-filtered-books/` to get filtered books.
 *
 * @param {Object} search - An object containing search parameters for filtering.
 * @returns {Promise<Object>} - The response from the API call containing filtered books.
 *
 * @example
 * // Example usage
 * const response = await `getFilteredBooksCall`(search);
 * console.log(response); // { success: 'Books found successfully', data: [...] }
 */
export const getFilteredBooksCall = async (search) => {
    try {
        console.log(search);
        const res = await axios.post('/api/get-filtered-books/', search);
        return res;
    } catch (error) {
        return error;
    }
};

/**
 * Sends a request to retrieve a list of unique authors from the inventory.
 * 
 * This function calls the API endpoint `POST /api/get-authors/` to get authors.
 *
 * @returns {Promise<Object>} - The response from the API call containing authors.
 *
 * @example
 * // Example usage
 * const response = await `getAuthorsCall`();
 * console.log(response); // { success: 'Authors fetched successfully', data: [...] }
 */
export const getAuthorsCall = async () => { 
    try {
        const res = await axios.post('/api/get-authors/');
        return res;
    } catch (error) {
        return error;
    }
};

/**
 * Sends a request to retrieve a list of unique genres from the inventory.
 * 
 * This function calls the API endpoint `POST /api/get-books-genre/` to get genres.
 *
 * @returns {Promise<Object>} - The response from the API call containing genres.
 *
 * @example
 * // Example usage
 * const response = await `getBooksGenreCall`();
 * console.log(response); // { success: 'Books genre fetched successfully', data: [...] }
 */
export const getBooksGenreCall = async () => {
    try {
        const res = await axios.post('/api/get-books-genre/');
        return res;
    } catch (error) {
        return error;
    }
};