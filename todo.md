# The Store

## The Store needs to be able to:

- [ ] Take orders from customers
- [ ] Reduce inventory when order are placed
- [ ] BONUS Track product sales across Store departments 

Requirements
- [X] MSQL Database called thestore
- [X] table products
  - [X] item_id
  - [X] product_name
  - [X] department_name
  - [X] price
  - [X] stock_quantity
- [ ] Populate DB with different products
- [ ] Node Application thecustomer.js
  - [ ] At start shows all products available (id,name,price)
  - [ ] Prompt user
    - [ ] Ask user id of product to buy
    - [ ] Ask user number of units to buy
    - [ ] The application checks if there is enough inventory to satisfy order.  
      - [ ] If not, let the user know and stop the order.
      - [ ] If there is, fulfil order by
        - [ ] Updating quantity on DB
        - [ ] Presenting cost to the user

TODOs
- [ ] Create files
  - [x] .gitignore
  - [x] schema.sql
    - [X] create db thestore
    - [X] create table products
  - [X] seedProducts.js
    - [X] include script in package.json to seed the db
  - [ ] thestore.js
  - [ ] readme.md
- [ ] Commit to gitHub
- [x] Install packages
  - [x] mysql
  - [x] inquirer
  - [x] faker


much more as manager if you have the time........