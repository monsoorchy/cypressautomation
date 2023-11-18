# Cypress E2E Project
The repository contains automated tests for an EMI calculator web application using Cypress. It also includes API tests for validating parameters from the  endpoint "https://reqres.in/api/users?page=2".

## Dependencies
Make sure you have the following dependencies installed before running the tests:
- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [VS Code](https://code.visualstudio.com/)

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone <repository_url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project_directory>
    ```

3. Install the Cypress development Dependency:

    ```bash
   npm init -> npm install --save-dev cypress -> npx cypress open
    ```

## Running EMI Calculator Tests

### Test Case 1: Validate the EMI pie chart

1. Launch the application URL.
2. Go to the Home Loan tab.
3. Provide the specified values in the application and calculate the EMI.
4. Validate the output of your code with numbers in the application.
5. Home Loan Amount: 25L, Interest Rate: 10%, Tenure: 10 Years.
6. Home Loan Amount: 50L, Interest Rate: 7.5%, Tenure: 15 Years.
7. Check availability of pie chart.
8. Read the numbers from both the sections of the pie chart and Pass the step if its greater
than zero, else fail it.

Example:

```bash
npx cypress run --record --spec file.cy.js
```

### Test Case 2: Validate the EMI bar chart

1. Launch the application URL.
2. Go to the Personal Loan tab.
3. Move the slider for "Personal Loan Amount," "Interest Rate," "Loan Tenure" text boxes for specified values.
4. Change the Month from the calendar widget.
5. Check the availability of the bar chart.
6. Count the number of bars available.
7. Read the values from any one bar tooltip.

Example:

```bash
npx cypress run --record --spec file.cy.js
```


## Running API Test

### Test Case 3: Validate the parameters of API

1. Access the API "https://reqres.in/api/users?page=2".
2. Check for the response status code.
3. Validate the "ID", "email", "first_name", "last_name" from responses for all users with
Fixtures. 

```bash
npx cypress run --record --spec file.cy.js
```

## Running All the Test

```bash
npx cypress run
```
