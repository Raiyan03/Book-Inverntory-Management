import axios from "axios";

/**
 * Sends a request to add a new book to the inventory.
 * 
 * @param {Object} book - The book object containing details to be added.
 * @returns {Promise<Object>} - The response from the API call.
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
 * @param {Object} book - The book object containing updated details.
 * @returns {Promise<Object>} - The response from the API call.
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
 * @param {number} entry_id - The ID of the book entry to be deleted.
 * @returns {Promise<Object>} - The response from the API call.
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
 * Sends a request to retrieve a list of books filtered by specified criteria.
 * 
 * @param {Object} search - An object containing search parameters for filtering.
 * @returns {Promise<Object>} - The response from the API call containing filtered books.
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
 * @returns {Promise<Object>} - The response from the API call containing authors.
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
 * @returns {Promise<Object>} - The response from the API call containing genres.
 */
export const getBooksGenreCall = async () => {
    try {
        const res = await axios.post('/api/get-books-genre/');
        return res;
    } catch (error) {
        return error;
    }
};