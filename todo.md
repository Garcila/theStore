# The Store

## The Store needs to be able to:

- [ ] Take orders from customers
- [ ] Reduce inventory when order are placed
- [ ] BONUS Track product sales across Store departments 

Requirements
- [ ] MSQL Database called thestore
- [ ] table products
  - [ ] item_id
  - [ ] product_name
  - [ ] department_name
  - [ ] price
  - [ ] stock_quantity
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
  - [x] schema.sql
    - [ ] create db thestore
    - [ ] create table products
  - [ ] seeds.sql
  - [ ] thestore.js
  - [ ] readme.md
- [ ] Install packages
  - [ ] mysql
  - [ ] inquirer
  - [ ] faker?


much more as manager if you have the time........