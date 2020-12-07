# Currency Exchange Calculator

#### A webpage which converts a quantity of one currency into its equivalent value in another currency using up-to-date exchange rates, 11/30/20

#### By Eric Endsley

## Description
This webpage fetches data from the Exchange Rate API found [here](https://exchangerate-api.com//) to pull up-to-date exchange rates for between all currencies provided by the API. The three form inputs allow users to enter a currency to convert from, an amount of that currency, and a currency to convert to. When the user clicks the submit button, the page displays a string which states value of the given amount in first currency selection converted into the selected currency. The converter is able to convert both from and to all available currencies offered by the aforementioned API. The page also displays an icon of the country's flag associated with each currency upon change of the select form. 

## Setup
#### Get Node
This project requires Node.js to run. If you don't have Node installed on your machine already, navigate to the [Node download page](https://nodejs.org/en/download/) and follow their instructions to install.

#### Get an API Key
Navigate to the website for the [Exchange Rate API](https://www.exchangerate-api.com/). Enter your email address in the form provided and follow their instructions to recieve an API Key. Once you have registered and signed in, your API Key will be listed under API Access. Copy the string of characters or refer back to this webpage to do so when instructed to input your API Key in a .env file later. 

#### Clone and Open The Code Locally
 1. Open the [Currency Exchange Calculator website](https://github.com/eric-endsley/week-6-project.git) by clicking the link or copy/pasting https://github.com/eric-endsley/week-6-project.git in the navigator bar of a web browser application.

 2. Click the green Code button in the upper-right part of the window and then EITHER:

 3. a. Copy the HTTPS URL for the repo and use it in the git clone command in git-bash or another git terminal by inputting: "git clone https://github.com/eric-endsley/week-6-project.git"<br>
 OR b. Click "Download Zip" and unzip the file to an accessible location on your machine.

 4. Right click on the project directory and open it with VS Code or another code editor. 

#### Finish Setup Using Terminal and Open Webpage

 1. Run a terminal (e.g. GitBash) in the project directory and enter the terminal command "npm install".

 2. Create a new file at the top level of the project directory called .env, either manually in your file navigator, or with the terminal command "touch .env".

 3. In the .env file write API_KEY='YOUR-API-KEY', pasting the API Key you obtained earlier in place of 'YOUR-API-KEY'.

 4. Enter the commands "npm run build" followed by "npm run start" to initiate a live reloading instance of the webpage locally.

## Technologies Used
[Exchange Rate API](https://exchangerate-api.com/) found at https://exchangerate-api.com/<br>
[Flagpedia Flag Image Library](https://flagpedia.net/download/api) found at https://flagpedia.net/download/api<br>
Javascript, JQuery, CSS, Bootstrap, HTML, Node, Popper, Babel and ESLint

## Known Bugs
None

## Contact Information
To ask questions or report a bug, contact [Eric Endsley](mailto:eric.endsley4@gmail.com)

## Legal
This software is licensed under the MIT license.