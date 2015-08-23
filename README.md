Example [DaSpec JS](http://daspec.com) setup running inside Node for testing javascript projects.

[![Build Status](https://travis-ci.org/daspec/daspec-js-npm-example.svg?branch=master)](https://travis-ci.org/daspec/daspec-js-npm-example)

This project demonstrates how to:

* Use Node to run DaSpec tests from the console
* Load custom formatters (using the [JUnit XML Formatter](https://github.com/daspec/daspec-js-junit-xml-formatter))
* Load custom matcher libraries (using the [Quantity Matchers](https://github.com/daspec/daspec-js-quantity-matchers))
* Load system under test files using Node Modules ([quantity-steps.js](steps/quantity-steps.js) uses [speeds.js](src-modules/speeds.js))
* Load system under test files using DaSpec configuration ([inventory-steps.js](steps/inventory-steps.js) uses [inventory-service.js](src/inventory-service.js))

## Installation

Check out the git repository, then do 

    npm install

to pull the dependencies. You should be able to run

    npm test

and DaSpec will execute the spec files from the [specs](specs) folder, saving them into `daspec-output`.

For configuration details, see the scripts part of [package.json](package.json) and the [custom-daspec.json](custom-daspec.json) config file.
