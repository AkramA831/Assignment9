# Assignment9

## Prerequisites

Before running the test suite, you must create two employees manually in the PIM module on the OrangeHRM demo site.

    Visit: https://opensource-demo.orangehrmlive.com

    Log in using:

        Username: Admin

        Password: admin123

    Go to PIM > Add Employee

    Add the following users:

        First Name: cypressuser1, Last Name: any random string (e.g., TestA)

        First Name: cypressuser2, Last Name: any random string (e.g., TestB)

    Save the employees.

These employees will be used when assigning users in the Admin module.

  **Install dependencies:**
    This will install Cypress and all other necessary packages defined in `package.json`.
    ```bash
    npm install
    ```
## How to Run Headless Mode
  In your terminal, run the command `npx cypress run`. This will start the interactive Cypress Test Runner.
  ![CleanShot 2025-07-10 at 11 01 05](https://github.com/user-attachments/assets/14df1451-7e91-44d2-90c1-49eb3d5eb254)

## How to Run wit GUI
  1. First, clone the project repository to your computer. Then, open a terminal, navigate into the new project directory, and run npm install to install Cypress and all required dependencies.

  2. In your terminal, run the command `npx cypress open`. This will start the interactive Cypress Test Runner.

  3. -  After the Cypress GUI appears, wait for it to load completely.
     -  Choose the E2E Testing type and select your browser.
     -  Click on the specific .feature file you wish to run.
      
  4. A new browser window will open and automatically execute the test from start to finish. Once the test is complete, you can close the browser window and the Cypress GUI.

## GUI Report 


![CleanShot 2025-07-10 at 10 03 06@2x](https://github.com/user-attachments/assets/d1826320-9dc7-41ae-a206-0589592a6c83)
![CleanShot 2025-07-10 at 10 03 28@2x](https://github.com/user-attachments/assets/3573b1f4-d4f7-494b-9af4-ba79f80d9b0c)
![CleanShot 2025-07-10 at 10 03 49@2x](https://github.com/user-attachments/assets/5bec50ad-afb9-48fc-bcf7-558e13bdea70)
![CleanShot 2025-07-10 at 10 10 31](https://github.com/user-attachments/assets/96f521d1-558b-4e58-a161-fed9a8ea1009)

## Notes
The test results show one failed scenario, which was an expected outcome because it was a "negative test case" designed to check the application's error handling. This specific test attempted to create a user with a username that doesn't existed, indicating that the failure is not a script error but a valid bug in the application's functionality, successfully identified by the test.
