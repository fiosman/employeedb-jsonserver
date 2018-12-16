# Employee Records Database

A CRUD application that is designed to add, delete, edit and retrieve employee records using a fake REST API [JSON-server](https://github.com/typicode/json-server). AJAX calls are all made using JavaScript's built in fetch API, with ES8 async/await syntax. 

## Getting Started

Ensure [Node.js](https://nodejs.org/en/) is installed, as it is required to install & run the application's dependencies.

* Clone the repository ```$ git clone https://github.com/fiosman/employeedb-jsonserver.git```
* Install the required dependencies in the project's root folder ```$ npm install```
* Run webpack-dev-server ```$ npm run start```
* Start json-server ```$ npm run json:server```. You can access employee records and see changes on ```http://localhost:3000/employees```. Each record is an object inside an array. 
    - Example record:
        ```javascript
         [
            {
                "name": "John Doe",
                "age": "33",
                "position": "Teacher",
                "salary": "$71000",
                "id": 1,
            }
         ]
        ```

## Tools and Technologies 

* CSS3/Boostrap 4/Bootswatch 
* HTML5
* JSON-Server 
* Modular JavaScript
* [Webpack](https://webpack.js.org/) (assets bundler) & [Babel](https://babeljs.io/) (to transpile ES6+ code down to ES5). Note Babel polyfills were also used to provide browser support for modern syntax such as Async/Await. 
* AJAX

## Contributors

Fares Osman (fares.osman@outlook.com)

## License

Licensed under the [MIT License](LICENSE)