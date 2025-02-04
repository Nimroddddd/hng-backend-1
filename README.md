This project was built using node.js and serves as a simple API that accepts a number query, and checks if its a prime number, perfect number and armstrong number. Lastly, a fun fact about the given number is then returned.

**PREREQUISITES:**
- Node.js
- npm

**RUNNING THE PROJECT LOCALLY:**
- clone the repo
  
  ```
  git clone https://github.com/Nimroddddd/hng-backend-1.git
  ```
- install npm packages
  
  ```
  npm install
  ```
- run the project

  ```
  node index.js
  ```
  

  **API DOCUMENTATION**
  
  Base URL:

  ```
  https://hng-backend-1-3bcz.onrender.com
  ```
  
  **Endpoints:**
  
  `GET /api/classify-number`
  - **Description:** Fetch data.
  - **Query Parameters**
    | Parameter | Type   | Description                         | Required |
    |-----------|--------|-------------------------------------|----------|
    | `number`  | String | The number to classify (must be an integer). | ✅ Yes |
  - **Response:**
 
    Success ( `200 OK` )
    ```json
    {
      "number": 371,
      "is_prime": false,
      "is_perfect": false,
      "properties": ["armstrong", "odd"],
      "digit_sum": 11,
      "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
    }

     ```

    Error ( `400 Bad Request` )
    ```json
    {
      "number": "alphabet",
      "error": "true"
    }
    ```

https://hng.tech/hire/nodejs-developers
  

  

