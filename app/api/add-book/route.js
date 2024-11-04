import { addNewBook } from "@/server/helper";
/**
 * API endpoint for adding a new book.
 * 
 * This endpoint handles POST requests to add a new book to the inventory.
 * It uses the `addNewBook` helper function to process the request.
 * 
 * **HTTP Method:** `POST`
 * 
 * **API Endpoint:** `/api/add-book/`
 * 
 * **Request Body:**
 * - Must contain the book details in JSON format:
 *   - `title` (string): The title of the book.
 *   - `author` (string): The author of the book.
 *   - `genre` (string): The genre of the book.
 *   - `publication_date` (string): The publication date of the book (YYYY-MM-DD format).
 *   - `isbn` (string|number): The ISBN number of the book.
 *   - `stock` (number): The number of copies available in stock.
 * 
 * **Response:**
 * - Returns a JSON object containing the status of the book addition:
 *   - `{ success: 'New book added successfully' }` on success.
 *   - `{ error: 'Something went wrong', details: <error message> }` on failure.
 * 
 * **Example Call Function:** 
 * To call this endpoint, use the `addNewBookCall` function located at `@server/calls`.
 * 
 * @param {Request} req - The request object containing the book details in JSON format.
 * @returns {Promise<Response>} A promise that resolves to the response object containing the status of the book addition.
 */
export const POST = addNewBook;