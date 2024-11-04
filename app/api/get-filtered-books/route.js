import { getFilteredBooks } from "@/server/helper";

/**
 * API endpoint for retrieving filtered books based on search criteria.
 * 
 * This endpoint handles POST requests to fetch books that match specific 
 * search criteria including title, author, and genre. It utilizes the 
 * `getFilteredBooks` helper function to perform the search and return the results.
 * 
 * **HTTP Method:** `POST`
 * 
 * **API Endpoint:** `/api/get-filtered-books/`
 * 
 * **Request Body:**
 * - The request should contain an object with the search criteria, typically structured as:
 *   ```json
 *   {
 *       "title": "search term",
 *       "author": "search term",
 *       "genre": "search term"
 *   }
 *   ```
 * 
 * **Response:**
 * - Returns a JSON object containing the array of filtered books:
 *   - `{ success: 'Filtered books retrieved successfully', data: <array of books> }` on success.
 *   - `{ error: 'Something went wrong', details: <error message> }` on failure.
 * 
 * **Example Call Function:**
 * To call this endpoint, use the `getFilteredBooksCall` function located at `@server/calls`.
 * 
 * @param {Request} req - The request object containing search criteria in the body.
 * @returns {Promise<Response>} A promise that resolves to the response object 
 * containing the filtered list of books or an error message if the search fails.
 */
export const POST = getFilteredBooks;