Vending Machine Problem
-----------------------

NOTES:
-----------------------
1. At launch
    -Soda varieties: 4
    -More varieties later in year
2. Soda properties
    -Cost: $
    -Quantity: int
    -Prices to be adjusted based on sales
    -Prices to be adjusted during certain time frame

DEV:
-----------------------
1. Webpage
    -Vending machine UI
    -ACTION: PURCHASE SODA
        -Reduce quantity in vending machine
        -Browser downloads JSON file for associated soda
2. HTTP API
    -Admin check status of vending machine
    -Admin restock vending machine
        -Limited amount
            -FIGURE OUT HOW TO LIMIT
                -Maybe 1 per hour
    -Admin can easily update prices
3. NOTES:
    -Backend
        -NODEJS
    -Frontend
        -Can use any JavaScript framework (Angular, React, Vue, etc)
    -Can use CSS
    -Can use HTML
    -Can use any tools, technology, libraries available to public
    -Fully stocked
        -contains entire virtual soda lineup
        -price and quantity provided with each individual soda



sodas = {
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
}
------------------------------------------
1. Create client side
    command:
        -npx create-react-app client
    cd into client folder
    command to launch React app:
        -npm start

2. Create server side
    command to run server:
        -npm run dev 