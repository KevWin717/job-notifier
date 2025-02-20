# Job Notifier App
## Project Overview
The Job Notifier application automates the process of searching for job postings in the IT and software engineering fields. It fetches data from the Adzuna Job Search API, saves new job listings to a MongoDB database <!-- , and sends email notifications for any new jobs found. The application can be scheduled to run at regular intervals using node-cron. -->

## Features
- Job Fetching: Retrieves job listings from the Adzuna API based on specified search criteria.

- Database Storage: Saves job postings to MongoDB, avoiding duplicates.

<!-- Email Notifications: Sends emails when new jobs are found.

Scheduling: Uses node-cron to schedule periodic job searches.

Logging: Implements detailed logging with Winston for easy debugging. -->

- Error Handling: Robust error handling to manage API errors and connectivity issues.

- Environment Configuration: Uses dotenv for environment variable management.

- Modularity: Organized code with separation of concerns for scalability.

## Tech Stack
- Backend: Node.js, Express.js

- Database: MongoDB Atlas

- HTTP Client: Axios

<!-- Task Scheduling: node-cron -->

<!-- Email Notifications: Nodemailer -->

<!-- Logging: Winston -->

- Version Control: Git and GitHub

## Prerequisites
Before you begin, ensure you have met the following requirements:

- Node.js and npm installed

- Git installed

- A MongoDB Atlas account (free tier)

- An Adzuna API account

<!-- An email account (Gmail recommended) -->

- Access to a terminal or command line

## Installation
1. Clone the Repository
    ```bash
    git clone https://github.com/kevwin717/job-notifier.git
    cd job-notifier
2. Install Dependencies
    ```bash
    npm install
<!-- 3. Install Dev Dependencies (if any)
If you have dev dependencies like nodemon, install them:

bash
npm install --save-dev nodemon -->

## Configuration
1. Set Up Environment Variables
Create a .env file in the root directory of your project:

    ```bash
    touch .env 
    ```
Add the following environment variables to your .env file:

    env
    # Adzuna API Credentials
    APP_ID=your_adzuna_app_id
    API_KEY=your_adzuna_api_key

    # MongoDB Atlas Connection URI
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority

    # Email Credentials
    EMAIL_USER=your_email@example.com
    EMAIL_PASS=your_email_password
    # NOTIFICATION_EMAIL=recipient_email@example.com

    # Job Search Parameters
    JOB_SEARCH_TERM=software engineer
    JOB_LOCATION=Austin, TX

    # Server Port
    PORT=3000
    ```
> Important: Replace placeholders with your actual credentials.

2. Secure Your Environment Variables
Ensure your .env file is included in .gitignore to prevent sensitive information from being committed to version control:

    ```bash
    echo ".env" >> .gitignore
    ```

## Usage
1. Running the Application
For development, you can use nodemon:

    ```bash
    npm run dev
    ```
For production:

    ```bash
    npm start
    ```

2. Accessing the Application
- The server runs on http://localhost:3000/.
- A test route is available at /jobs to view the jobs in JSON format.

Example:

    ```bash
    http://localhost:3000/jobs
    ```

## Testing
1. Verify Environment Variables
Ensure all environment variables are correctly set and loaded.

2. Test MongoDB Connection
- Check the console for MongoDB connected.
- Use MongoDB Compass or MongoDB Atlas Data Explorer to view the jobs collection.

3. Test API Fetching
- Observe console logs for API Request Params and fetched jobs.
- Address any errors related to API requests.

<!-- 4. Test Email Notifications
- Confirm that emails are sent when new jobs are found.
- Check your email inbox for notifications. -->

<!-- 5. Test Scheduling
Adjust cron schedule in app.js for testing (e.g., run every minute). -->

<!-- Verify that job fetching occurs at scheduled intervals. -->

4. Check Logging and Error Handling
- Ensure logs are detailed and errors are properly handled.
- Induce errors intentionally (e.g., incorrect API key) to test error handling.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature/YourFeature
    ```
3. Make your changes.
4. Commit your changes:

    ```bash
    git commit -m "Add YourFeature"
    ```
5. Push to the branch:

    ```bash
    git push origin feature/YourFeature
    ```

6. Open a Pull Request.

## Acknowledgements
- Adzuna for providing the Job Search API.
- MongoDB Atlas for hosting the database.
- Node.js and Express.js for the application framework.
<!-- - Nodemailer for handling email notifications.
- Winston for logging capabilities. -->
