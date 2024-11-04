# **Book Inventory Management**

A web-based inventory management system for books that allows users to add, edit, delete, search, and filter books. The system also supports exporting book data to CSV or JSON format.

---

### **Tech Stack**

- **Frontend**: React.js, Next.js
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL (Hosted on Vercel)
- **Styling**: Tailwind CSS
- **Data Fetching**: Axios

---

### **Video Demo**

https://github.com/user-attachments/assets/710db4a0-fa35-40f7-89ee-0606a9bcb393

---

### **Live link**
[Click here](https://book-inventory-topaz.vercel.app/)        


Here’s a concise section for your README that highlights the important directories in your project structure:

## Project Structure

The `book-inventory` project follows a specific directory structure to organize the application files effectively. Below are the key directories and their purposes:

- **`root/app/page.jsx`**: This is the landing page of the application, serving as the main entry point for users.
- **`root/server/calls.js`**: This file contains all the API calls made to the backend, managing interactions with the database.
- **`root/server/helper.js`**: This file includes helper functions that assist with resolving API calls and responses.
- **`root/components`**: This directory contains all UI components used throughout the application, allowing for modular and reusable design.
- **`root/app/api`**: This directory houses all the API endpoints for handling requests related to book inventory management.

These directories are essential for maintaining a clean and organized codebase, facilitating ease of development and collaboration.

## **Quickstart**

In this quickstart, you'll set up the `book-inventory` application locally and connect it to a PostgreSQL database.

### Prerequisites

1. **Clone the Repository**  
   Clone the repository to your local machine using:
   ```bash
   git clone https://github.com/Raiyan03/book-inventory.git
   ```

2. **Navigate to the Project Directory**  
   Change into the project directory:
   ```bash
   cd book-inventory
   ```

3. **Install Dependencies**  
   Run the following command to install the required npm packages:
   ```bash
   npm install
   ```

### Setting Up Your PostgreSQL Database

You will need to set up a PostgreSQL database using Vercel for this application.

1. **Create a PostgreSQL Database**  
   - In your dashboard on Vercel, create or select the project you want to work with.
   - Select the **Storage** tab, then click the **Connect Store** button.
   - Choose **Postgres**.
   - Enter a database name (e.g., `book_inventory_db`). It can only contain alphanumeric characters (including "_" and "-") and can't exceed 32 characters.
   - Select a region near your project's Edge or Serverless Functions for faster responses.
   - Click **Create and Continue**.
   - In the next view, change nothing and select **Connect**.
   - Review what was created; you now have an empty PostgreSQL database in your selected region.

2. **Retrieve Your Database Credentials**  
   After connecting your database, you will need the following credentials, which are available as environment variables:
   - `POSTGRES_URL`
   - `POSTGRES_PRISMA_URL`
   - `POSTGRES_URL_NON_POOLING`
   - `POSTGRES_USER`
   - `POSTGRES_HOST`
   - `POSTGRES_PASSWORD`
   - `POSTGRES_DATABASE`  
   You can view them by navigating to the **Settings** tab in your project and selecting the **Environment Variables** panel.

3. **Prepare Your Local Project Environment**  
   To pull the environment variables into your local environment, run:
   ```bash
   vercel env pull .env.development.local
   ```

4. **Create the Inventory Table**  
   Next, create the `INVENTORY` table in your database:
   - Go to the **Storage** tab and select your PostgreSQL database.
   - Click on the **Query** tab in the Data section.
   - Paste the following SQL query into the SQL query box:
   ```sql
   CREATE TABLE INVENTORY (
       ENTRY_ID SERIAL PRIMARY KEY,
       TITLE VARCHAR(100) NOT NULL, 
       AUTHOR VARCHAR(50) NOT NULL,
       GENRE VARCHAR(30),
       PUBLICATION_DATE DATE,
       ISBN VARCHAR(30) UNIQUE,  
       STOCK INT DEFAULT 0
   );

   INSERT INTO INVENTORY (TITLE, AUTHOR, GENRE, PUBLICATION_DATE, ISBN, STOCK) 
   VALUES 
   ('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', '1925-04-10', '9780743273565', 15),
   ('Tender is the Night', 'F. Scott Fitzgerald', 'Fiction', '1934-04-12', '9780684801544', 12),
   ('1984', 'George Orwell', 'Dystopian', '1949-06-08', '9780451524935', 30),
   ('Animal Farm', 'George Orwell', 'Satire', '1945-08-17', '9780451526342', 25),
   ('To Kill a Mockingbird', 'Harper Lee', 'Fiction', '1960-07-11', '9780060935467', 20),
   ('Pride and Prejudice', 'Jane Austen', 'Romance', '1813-01-28', '9781503290563', 25),
   ('Sense and Sensibility', 'Jane Austen', 'Romance', '1811-10-30', '9780141439662', 22),
   ('Emma', 'Jane Austen', 'Fiction', '1815-12-23', '9781503290204', 20),
   ('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', '1937-09-21', '9780547928227', 5),
   ('The Fellowship of the Ring', 'J.R.R. Tolkien', 'Fantasy', '1954-07-29', '9780547928203', 8);
   ```
   - Click **Run Query** to execute the SQL commands.

### Running the Application

After setting up the database and running the SQL queries, you can start your application using:
```bash
npm run dev
```

Your application should now be running locally, connected to your PostgreSQL database! You can visit `http://localhost:3000` in your web browser to see it in action.

