# The Store

## The Store needs to be able to:

- [ ] Take orders from customers
- [ ] Reduce inventory when order are placed
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
    - [x] create db thestore
    - [x] create table products
  - [x] seedProducts.js
    - [x] include script in package.json to seed the db
  - [ ] thestore.js
  - [ ] readme.md
- [x] Commit to gitHub
- [x] Install packages
  - [x] mysql
  - [x] inquirer
  - [x] faker


much more as manager if you have the time........