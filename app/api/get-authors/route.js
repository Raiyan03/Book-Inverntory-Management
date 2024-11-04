import { getAuthors } from "@/server/helper";

/**
 * API endpoint for fetching authors from the inventory.
 * 
 * This endpoint handles POST requests to retrieve a list of distinct authors.
 * It utilizes the `getAuthors` helper function to fetch the data.
 * 
 * **HTTP Method:** `POST`
 * 
 * **API Endpoint:** `/api/get-authors/`
 * 
 * **Request Body:**
 * - The request object is not utilized in this endpoint and can be empty.
 * 
 * **Response:**
 * - Returns a JSON object containing the list of authors:
 *   - `{ success: 'Authors fetched successfully', data: <array of authors> }` on success.
 *   - `{ error: 'Something went wrong', details: <error message> }` on failure.
 * 
 * **Example Call Function:**
 * To call this endpoint, use the `getAuthorsCall` function located at `@server/calls`.
 * 
 * @param {Request} req - The request object (not used in this endpoint).
 * @returns {Promise<Response>} A promise that resolves to the response object containing a list of authors.
 */
export const POST = getAuthors;