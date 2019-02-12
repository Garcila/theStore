# The Store

## The Store needs to be able to:

- [x] Take orders from customers
- [x] Reduce inventory when order are placed
- [ ] BONUS Track product sales across Store departments 

Requirements
- [x] MSQL Database called thestore
- [x] table products
  - [x] item_id
  - [x] product_name
  - [x] department_name
  - [x] price
  - [x] stock_quantity
- [x] Populate DB with different products
- [x] Node Application thecustomer.js
  - [x] At start shows all products available (id,name,price)
  - [x] Prompt user
    - [x] Ask user to select product to buy
    - [x] Ask user number of units to buy
    - [x] The application checks if there is enough inventory to satisfy order.  
      - [x] If not, let the user know and stop the order... Modified to prompt for a new quantity.
      - [x] If there is, fulfil order by
        - [x] Updating quantity on DB
        - [x] Presenting cost to the user

TODOs
- [x] Create files
  - [x] .gitignore
  - [x] schema.sql
    - [x] create db thestore
    - [x] create table products
  - [x]   seedProducts.js
    - [x] include script in package.json to seed the db
  - [x] thestore.js
  - [ ] readme.md
- [x] Commit to gitHub
- [x] Install packages
  - [x] mysql
  - [x] inquirer
  - [x] faker


much more as manager if you have the time........