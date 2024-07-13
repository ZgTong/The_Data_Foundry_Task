# The Data Foundry Task

## Project Overview
The Data Foundry Task is a front-end application built with AWS Amplify, featuring user authentication, fetching and displaying static content from an S3 bucket, and a mini portal where users can submit service requests. These requests are saved to DynamoDB and displayed on the UI.

### Live URL [https://tdf.zuguangtong.xyz](https://tdf.zuguangtong.xyz)
**Username: tongzuguang@gmail.com**

**Password: 12345678**

**The signup function is limited because the only mobile number verified is my own.**

## Module 1: Setup

### Prerequisites
- Node.js (Recommended 20)
- pnpm
- AWS CLI
- AWS Amplify CLI

### Installation Steps

1. **Clone the repository**
    ```bash
    git clone https://github.com/ZgTong/The_Data_Foundry_Task.git
    cd your-repo-directory
    ```

2. **Install dependencies**
    Using pnpm to install dependencies:
    ```bash
    pnpm install
    ```

3. **Configure AWS Amplify**
    - Ensure you have created and configured an Amplify project in the AWS Console.
    - Run the following command in the project root directory to initialize Amplify:
    ```bash
    amplify init
    ```
    - Select the appropriate settings and follow the prompts to complete initialization.

4. **Add necessary Amplify features**
    - Add authentication:
    ```bash
    amplify add auth
    ```
    - Add S3 storage:
    ```bash
    amplify add storage
    ```
    - Add GraphQL API:
    ```bash
    amplify add api
    ```
    - Push the Amplify configuration:
    ```bash
    amplify push
    ```

5. **Start the development server**
    ```bash
    pnpm frontend-start
    ```
    Access the application at `http://localhost:3000`.

## Module 2: Project Design Process

### Requirements Analysis

1. **User Authentication**
    - Implement a login page ensuring only authenticated users can access the main features.
    - Use AWS Amplify's Auth module for user authentication.

2. **Fetch and Display Files from S3**
    - Upload static files (e.g., images, text files) to an S3 bucket.
    - Use Amplify Storage module to fetch and display files from S3.

3. **Mini Portal with DynamoDB Integration**
    - Design an input form with the following fields for a service request:
        - Service Request Name
        - Service Request Description
        - Creation Date
        - Severity (Low, Medium, High)
        - Resolution Date (automatically calculated based on severity and creation date)
        - Reporter Name
        - Contact Information
        - Location
    - Validate the form to ensure all required fields are filled out.
    - Generate a unique case number (using a UUID generator) on form submission.
    - Save the input data along with the generated case number to DynamoDB using Amplify API.
    - Retrieve and display the saved data from DynamoDB on the UI, updating dynamically as new entries are added.

### Design and Implementation

1. **User Authentication**
    - Use Amplify Auth module's UI components to implement the login page and authentication logic.
    - Configure Amplify Auth to enable user registration, login, and session management.

2. **File Display**
    - Upload static files to the S3 bucket and configure the permissions.
    - Use Amplify Storage module to fetch file URLs from S3 and display them on the front end.

3. **Service Request Form**
    - Use React and Amplify UI components to build the form.
    - Handle form state and validation to ensure all required fields are filled.
    - Calculate the resolution date based on the severity and creation date.
    - Use UUID to generate a unique case number on form submission.
    - Save the form data to DynamoDB using the Amplify API.
    - Retrieve the saved data from DynamoDB and display it below the form, ensuring the display updates dynamically as new entries are added.
