# Kabbage Prequalification Form

This is a React web application which interacts with the Kabbage Prequal API to determine if a user is prequalified for a small business loan or not.

## Getting Started

1. Clone the repository.
2. In the kabbage-prequal directory, run ```npm install```.
3. In the same directory, run ```npm run-script start```.
4. Open a web browser and navigate to http://localhost:8085.

Currently, the API is only returning a 403 response with a body of "Developer Inactive", although the AJAX POST request in the app will run through the success function as if the response is acceptable.
