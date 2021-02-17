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


JSON data
-----------------------
sodas = [{
    "Soda 1": {
        "Product Name": "Fizz",
        "Description": "An effervescent fruity experience with hints of grape and coriander.",
        "Cost": 1
        "Quantity": 100,
    }
    "Soda 2": {
        "Product Name": "Pop",
        "Description": "An explosion of flavor that will knock your socks off!",
        "Cost": 1
        "Quantity": 100,
    }
    "Soda 3": {
        "Product Name": "Cola",
        "Description": "A basic no nonsense cola that is the perfect pick me up for any occasion.",
        "Cost": 1
        "Quantity": 200,
    }
    "Soda 4": {
        "Product Name": "Mega Pop",
        "Description": "Not for the faint of heart. So flavorful and so       invigorating, it should probably be illegal.",
        "Cost": 1
        "Quantity": 50,
    }
}]
------------------------------------------
1. Create client side
    install global package to create react apps:
        -npm install -g create-react-app
    command:
        -npx create-react-app client
    cd into client directory:
        -cd client
    command to launch React app:
        -npm start

2. Create server side
    install nvm:
        -https://github.com/nvm-sh/nvm
    install node lts command:
        -nvm install --lts
    install express-generator globally:
        -npm install express-generator -g
    create server:
        -express --ejs server
    change into server directory:
        -cd server
    install nodemon command:
        -npm i nodemon
    add script to package.json to run server:
        -"dev": "nodemon www.js",
    change port to different value to run same time as client
    run server
        -npm run dev