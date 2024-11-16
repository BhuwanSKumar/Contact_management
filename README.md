📋 Project Description --------->
This Contact Management System helps users efficiently manage customer or client contact information in a business setting. It includes the ability to Add, View, Edit, and Delete contacts, ensuring all contact data is organized and accessible in one place. The system uses ReactJS with Material UI for a user-friendly frontend and NodeJS with MongoDB backend for robust functionality.

🚀 Features -------->

1. Add New Contacts
   Users can add new contacts with details:
   ~ First Name
   ~ Last Name
   ~ Email
   ~ Phone Number
   ~ Company
   ~ Job Title

2. View Contacts

   A table displays all saved contacts.
   Features include:
    ~ Sorting by column
    ~ Pagination for large datasets
   
3. Edit Contact Information
   Users can update contact details to ensure the information is always current.
   
4. Delete Contacts
   Outdated or duplicate entries can be removed to maintain a clean and relevant list.
   
🛠️ Tech Stack ------------>

   Frontend
   ~ ReactJS: For building an interactive user interface.
   ~ Material UI (MUI): For a consistent, clean, and accessible design.
   
   Backend
   ~ NodeJS: For API development and backend logic.

   Database
   ~ MongoDB: Chosen for its:
   ~ NoSQL flexibility, making it easy to store and query contact information.
   ~ Scalability for managing large datasets.
   ~ JSON-like documents, which align seamlessly with JavaScript-based systems like NodeJS.
   
🗂️ API Endpoints ------------->

1. POST /contacts
   ~ Adds a new contact to the database.
   ~ Validation ensures all required fields are present and data is valid.
   
2. GET /contacts
   ~ Retrieves all contact entries for display.

3. PUT /contacts/:id
   ~ Updates the information of a specific contact.
   
4. DELETE /contacts/:id
   ~ Deletes a contact from the database.

⚙ Installation and Setup --------->
  Follow these steps to set up and run the project locally:

Prerequisites : 
~ Node.js and npm installed
~ MongoDB installed and running (or access to a cloud MongoDB instance

Setup Instructions : 

1. Clone the Repository
   
   git clone <repository-url>
   cd contact-management-system

2. Install Dependencies

   # Frontend
   cd client
   npm install

   # Backend
   cd ../server
   npm install

3. Set Up the Database

   Ensure MongoDB is installed and running locally, or use a MongoDB cloud instance (e.g., MongoDB Atlas).
   Create a database (e.g., contacts_db). MongoDB will automatically create collections when data is inserted.

4. Environment Variables

   Create an .env file in the server folder with the following:
   DB_URI=mongodb://localhost:27017/contacts_db
   PORT=5000

5. Run the Application

   # Backend
   cd server
   npm start

   # Frontend
   cd ../client
   npm start

6. Access the App
   Open your browser and go to http://localhost:3000.

📋 Technical Decisions ------------->

1. Why MongoDB?
MongoDB's flexibility with unstructured data and JSON-like document model aligns seamlessly with JavaScript frameworks, making development faster and more intuitive.

2. MUI for UI Components
MUI provides ready-to-use, customizable components for creating a polished and intuitive interface quickly.

3. Modular Architecture
The app separates frontend and backend concerns, ensuring scalability and maintainability.

🧑‍💻 How It Works -------------->

Frontend
~ Contact data is managed using React states and updated dynamically with API calls.
~ The MUI Table is used for an organized, sortable, and paginated view.

Backend
~ Express.js handles routing and connects to the MongoDB database using Mongoose.
~ Validation ensures accurate and complete data submission.

Database
~ MongoDB stores contact data in a collection called contacts. Each document represents a contact entry.

📂 Directory Structure ---------->

contact-management-system/
├── client/          # ReactJS Frontend
│   ├── public/
│   ├── src/
│       ├── components/  # Form, Table, etc.
│       ├── services/    # API calls
├── server/          # NodeJS Backend
│   ├── controllers/    # API logic
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   ├── app.js          # Server setup


🤝 Contributing -------------->
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.


