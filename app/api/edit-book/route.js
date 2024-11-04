import { editBook } from "@/server/helper";

/**
 * API endpoint for editing an existing book.
 * 
 * This endpoint handles POST requests to update the details of a book in the inventory.
 * It uses the `editBook` helper function to process the request.
 * 
 * **HTTP Method:** `POST`
 * 
 * **API Endpoint:** `/api/edit-book/`
 * 
 * **Request Body:**
 * - Must contain the updated details of the book in JSON format:
 *   - `entry_id` (number): The ID of the book to be updated.
 *   - `title` (string): The new title of the book.
 *   - `author` (string): The new author of the book.
 *   - `genre` (string): The new genre of the book.
 *   - `publish_date` (string): The new publication date of the book (YYYY-MM-DD format).
 *   - `isbn` (string|number): The new ISBN number of the book.
 *   - `stock` (number): The new number of copies available in stock.
 * 
 * **Response:**
 * - Returns a JSON object containing the status of the update:
 *   - `{ success: 'Book details updated successfully' }` on success.
 *   - `{ error: 'Something went wrong', details: <error message> }` on failure.
 * 
 * **Example Call Function:**
 * To call this endpoint, use the `editBookCall` function located at `@server/calls`.
 * 
 * @param {Request} req - The request object containing the details of the book to be edited in JSON format.
 * @returns {Promise<Response>} A promise that resolves to the response object indicating the status of the update.
 */
export const POST = editBook;