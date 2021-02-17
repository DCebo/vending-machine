Vending Machine
-----------------------
Project: Create a vending machine utilizing React.js, Node.js, and Express.js

NOTES:
-----------------------
1. At launch
    -Soda varieties: 4
    -More varieties later in year
2. Soda properties
    -id: int
    -Cost: $
    -Quantity: int
    -Prices to be adjusted based on sales
    -Prices to be adjusted during certain time frame


How to Run Project
------------------------------------------
NOTE: Assuming all correct dependencies are installed
1. Download repo to local folder
2. Open two instances of terminal
3. In terminal 1 change into Vending Machine/server directory
4. Run command:
    -npm run dev
5. In terminal 2 change into Vending Machine/client directory
6. Run command:
    -npm start


How to Recreate Project
------------------------------------------
1. Create client side
    1.1 Install global package to create react apps:
        -npm install -g create-react-app
    1.2 Create React.js app by running following command:
        -npx create-react-app client
    1.3 Change into client directory:
        -cd client
    1.4 Command to launch React app:
        -npm start

2. Create server side
    2.1 Install nvm:
        -https://github.com/nvm-sh/nvm
    2.2 Install node lts command:
        -nvm install --lts
    2.3 Install express-generator globally:
        -npm install express-generator -g
    2.4 Create server with ejs flag:
        -express --ejs server
    2.5 Change into server directory:
        -cd server
    2.6 Install nodemon command:
        -npm i nodemon
    2.7 Add script to package.json to run server:
        -"dev": "nodemon www.js",
    2.8 Change port to different value to run same time as client
    2.9 Run server
        -npm run dev


DEV TODO:
-----------------------
1. client
    -Vending machine UI
    -ACTION: PURCHASE SODA
        -Reduce quantity in vending machine
        -Browser downloads JSON file for associated soda
2. server
    -Main Admin greeting page
    -Admin check status of vending machine
        -Displays current stock (JSON) of sodas
        -Admin restock vending machine
        -Operations Page
            -CRUD operations for soda via POSTMAN/API with future direct implementation